using Microsoft.WindowsAzure.Storage.Blob;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

namespace SoundVast.Utilities
{
    public interface IFileStorage
    {
        byte[] ImageBytes { get; set; }
        byte[] AudioBytes { get; set; }

        void ConvertToMp3(string fileName, string destPathToStoreAt, string mp3DestPathToStoreAt);
        void ReadMp3Bytes(IFormFile file);
        void ReadJpgBytes(IFormFile file, int newWidth, int newHeight);
    }

    public class FileStorage : IFileStorage
    {
        private readonly IConfigurationRoot _configuration;
        public static int CoverImageWidth => 217;
        public static int CoverImageHeight => 217;
        public byte[] ImageBytes { get; set; }
        public byte[] AudioBytes { get; set; }

        public FileStorage(IConfigurationRoot configuration)
        {
            _configuration = configuration;
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

        public void ConvertToMp3(string fileName, string destPathToStoreAt, string mp3DestPathToStoreAt)
        {
            //If it is already an .mp3 file then there's no need to convert
            if (Path.GetExtension(fileName) == ".mp3")
                return;

            var psi = new ProcessStartInfo($"{_configuration["Directory:EXE"]}ffempeg.exe",
                string.Format($@"-i ""{destPathToStoreAt}"" -y ""{mp3DestPathToStoreAt}"""))
            {
                CreateNoWindow = true,
                UseShellExecute = false,
                WindowStyle = ProcessWindowStyle.Hidden
            };

            using (var exeProcess = Process.Start(psi))
            {
                exeProcess.WaitForExit();

                //Converted the file to mp3, so delete the original
                File.Delete(destPathToStoreAt);
            }
        }

        public void ReadMp3Bytes(IFormFile file)
        {
            using (var reader = new BinaryReader(file.OpenReadStream()))
            {
                //  file.InputStream.Position = 0;
                //Up to 2GB
                AudioBytes = reader.ReadBytes((int)file.Length);
            }
        }

        public void ReadJpgBytes(IFormFile file, int newWidth, int newHeight)
        {
            using (var reader = new BinaryReader(file.OpenReadStream()))
            {
                //Convert and resize the file
                var ms = new MemoryStream(reader.ReadBytes((int)file.Length));
                var img = Image.FromStream(ms);
                ImageBytes = ResizeAndConvertToJpg(img, newWidth, newHeight);

              //  file.InputStream.Position = 0;
            }
        }
    }
}