using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace SoundVast.Storage.FileStorage
{
    public class FileStorage : IFileStorage
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;
        public static int CoverImageWidth => 217;
        public static int CoverImageHeight => 217;
        public byte[] ImageBytes { get; set; }
        public byte[] AudioBytes { get; set; }

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

        private async Task<ProcessAudioModel> ProcessAudioFile(string path, string fileName)
        {
            // https://ffmpeg.org/ffmpeg.html
            // -i - specifies the input files
            var arguments = $"-i {path} ";
            var isMp3Already = Path.GetExtension(fileName) == ".mp3";
            var mp3Path = path;

            // If it is already an .mp3 file then there's no need to convert
            if (!isMp3Already)
            {
                mp3Path = Path.ChangeExtension(path, ".mp3");

                arguments += $"{mp3Path} ";
            }
            
            var coverImagePath = Path.ChangeExtension(path, ".jpg");
            var metadataPath = Path.ChangeExtension(path, ".txt");
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

                if (!isMp3Already)
                {
                    File.Delete(path);
                }
            }

            return new ProcessAudioModel
            {
                AudioPath = mp3Path,
                CoverImagePath = coverImagePath,
                MetadataPath = metadataPath
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
                //you may allow for the process to be re-used (started = false) 
                //but I'm not sure about the guarantees of the Exited event in such a case
                throw new InvalidOperationException($"Could not start process: {process}");
            }

            process.BeginOutputReadLine();
            process.BeginErrorReadLine();

            return tcs.Task;
        }

        private void ReadMp3Bytes(IFormFile file)
        {
            using (var reader = new BinaryReader(file.OpenReadStream()))
            {
                // file.InputStream.Position = 0;
                // Up to 2GB
                AudioBytes = reader.ReadBytes((int)file.Length);
            }
        }

        private void ReadJpgBytes(IFormFile file, int newWidth, int newHeight)
        {
            using (var reader = new BinaryReader(file.OpenReadStream()))
            {
                // Convert and resize the file
                var ms = new MemoryStream(reader.ReadBytes((int)file.Length));
                var img = Image.FromStream(ms);
                ImageBytes = ResizeAndConvertToJpg(img, newWidth, newHeight);

                // file.InputStream.Position = 0;
            }
        }

        public async Task<ProcessAudioModel> TempStoreMp3Data(IFormFile file)
        {
            var path = Path.GetTempFileName();

            ReadMp3Bytes(file);
            File.WriteAllBytes(path, AudioBytes);

            return await ProcessAudioFile(path, file.FileName);
        }
    }
}
