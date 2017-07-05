using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace SoundVast.Storage.FileStorage
{
    public class FileStorage : IFileStorage
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;
        private string FfmpegPath => Path.Combine(_configuration["Directory:EXE"], "ffmpeg.exe");
        public static int CoverImageWidth => 217;
        public static int CoverImageHeight => 217;

        public FileStorage(IConfiguration configuration, ILoggerFactory loggerFactory)
        {
            _configuration = configuration;
            _logger = loggerFactory.CreateLogger<FileStorage>();
        }

        public static byte[] ResizeAndConvertToJpg(Image image, int width, int height)
        {
            var destRect = new Rectangle(0, 0, width, height);
            var destImage = new Bitmap(width, height);

            destImage.SetResolution(image.HorizontalResolution, image.VerticalResolution);

            using (var graphics = Graphics.FromImage(destImage))
            {
                graphics.CompositingMode = CompositingMode.SourceCopy;
                graphics.CompositingQuality = CompositingQuality.HighQuality;
                graphics.InterpolationMode = InterpolationMode.NearestNeighbor;
                graphics.SmoothingMode = SmoothingMode.HighQuality;
                graphics.PixelOffsetMode = PixelOffsetMode.HighQuality;

                using (var wrapMode = new ImageAttributes())
                {
                    wrapMode.SetWrapMode(WrapMode.TileFlipXY);
                    graphics.DrawImage(image, destRect, 0, 0, image.Width, image.Height, GraphicsUnit.Pixel, wrapMode);
                }
            }

            var ms = new MemoryStream();
            destImage.Save(ms, ImageFormat.Jpeg);

            return ms.ToArray();
        }

        //private void ReadJpgBytes(IFormFile file, int newWidth, int newHeight)
        //{
        //    using (var reader = new BinaryReader(file.OpenReadStream()))
        //    {
        //        // Convert and resize the file
        //        var ms = new MemoryStream(reader.ReadBytes((int)file.Length));
        //        var img = Image.FromStream(ms);
        //        ImageBytes = ResizeAndConvertToJpg(img, newWidth, newHeight);

        //        // file.InputStream.Position = 0;
        //    }
        //}

        private async Task<AudioFileMetadata> GetAudioMetadata(string path)
        {
            if (path == null) throw new ArgumentNullException(nameof(path));

            var coverImagePath = Path.ChangeExtension(path, ".jpg");
            var metadataPath = Path.ChangeExtension(path, ".txt");
            // https://ffmpeg.org/ffmpeg.html
            // -i - specifies the input files
            // -vsync vfr - frames with same input are dropped
            // -f ffmetadata - output a metadata file
            var arguments = $"-i {path} -vsync vfr -acodec copy {coverImagePath} -f ffmetadata {metadataPath}";

            var processStartInfo = new ProcessStartInfo(FfmpegPath, arguments)
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                RedirectStandardOutput = true,
                RedirectStandardError = true
            };

            using (var process = new Process
            {
                StartInfo = processStartInfo,
                EnableRaisingEvents = true
            })
            {
                await RunProcessAsync(process).ConfigureAwait(false);
            }

            // Metadata keys or values containing special characters (‘=’, ‘;’, ‘#’, ‘\’ and a newline)
            // must be escaped with a backslash ‘\’.
            int SplitIndex(string metadataLine)
            {
                return metadataLine.IndexOf("=", 0, StringComparison.Ordinal);
            }

            var metadata = File.ReadLines(metadataPath)
                .Where(x => SplitIndex(x) >= 0)
                .ToDictionary(x => x.Substring(0, SplitIndex(x)), x => x.Substring(SplitIndex(x) + 1));
            
            return new AudioFileMetadata
            {
                CoverImagePath = coverImagePath,
                CoverImageName = Path.GetFileName(coverImagePath),
                Metadata = metadata
            };
        }

        private async Task<ProcessAudio> GetAudioFile(string path, string fileName)
        {
            if (path == null) throw new ArgumentNullException(nameof(path));

            // https://ffmpeg.org/ffmpeg.html
            // -i - specifies the input files
            var arguments = $"-i {path} ";
            var isMp3Already = Path.GetExtension(fileName) == ".mp3";
            var mp3Path = Path.ChangeExtension(path, ".mp3");

            // If it is already an .mp3 file then there's no need to convert
            if (!isMp3Already)
            {
                arguments += $"{mp3Path} ";
            }

            var coverImagePath = Path.ChangeExtension(mp3Path, ".jpg");
            var metadataPath = Path.ChangeExtension(mp3Path, ".txt");
            var ffmpegPath = Path.Combine(_configuration["Directory:EXE"], "ffmpeg.exe");

            // -vsync vfr - frames with same input are dropped
            // -f ffmetadata - output a metadata file
            arguments += $"-vsync vfr -acodec copy {coverImagePath} -f ffmetadata {metadataPath}";

            var processStartInfo = new ProcessStartInfo(ffmpegPath, arguments)
            {
                UseShellExecute = false,
                CreateNoWindow = true,
                RedirectStandardOutput = true,
                RedirectStandardError = true
            };

            using (var process = new Process
            {
                StartInfo = processStartInfo,
                EnableRaisingEvents = true
            })
            {
                await RunProcessAsync(process).ConfigureAwait(false);
            }

            if (!isMp3Already)
            {
                File.Delete(path);
            }

            return new ProcessAudio
            {
                AudioPath = isMp3Already ? path : mp3Path,
                AudioName = Path.GetFileName(mp3Path),
        };
        }
        
        private Task<int> RunProcessAsync(Process process)
        {
            var tcs = new TaskCompletionSource<int>();

            process.Exited += (s, ea) => tcs.SetResult(process.ExitCode);
            process.OutputDataReceived += (s, ea) =>
            {
                _logger.LogInformation(1, ea.Data);
            };
            process.ErrorDataReceived += (s, ea) =>
            {
                _logger.LogError(2, ea.Data);
            };

            var started = process.Start();
            if (!started)
            {
                throw new InvalidOperationException($"Could not start process: {process}");
            }
            
            process.BeginOutputReadLine();
            process.BeginErrorReadLine();

            return tcs.Task;
        }

        private static async Task<byte[]> ReadFileBytes(IFormFile file)
        {
            using (var memoryStream = new MemoryStream())
            {
                await file.CopyToAsync(memoryStream);

                return memoryStream.ToArray();
            }
        }

        public async Task<ProcessAudio> TempStoreMp3Data(IFormFile file)
        {
            var path = Path.GetTempFileName();
            var audioBytes = await ReadFileBytes(file);

            File.WriteAllBytes(path, audioBytes);

            return await GetAudioFile(path, file.FileName);
        }

        public async Task<AudioFileMetadata> GetAudioFileMetadata(IFormFile file)
        {
            var path = Path.GetTempFileName();
            var audioBytes = await ReadFileBytes(file);

            File.WriteAllBytes(path, audioBytes);

            return await GetAudioMetadata(path);
        }
    }
}
