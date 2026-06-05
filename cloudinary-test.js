const cloudinary = require("cloudinary").v2;

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: "dzxqltjeq",
  api_key: "236469146362133",
  api_secret: "c6Om8s6Aca6mmAYF9OayK09r1nU"
});

async function main() {
  try {
    console.log("Subiendo imagen a Cloudinary...");

    const uploadResult = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      {
        folder: "app-vivero"
      }
    );

    console.log("Imagen subida correctamente");
    console.log("Secure URL:", uploadResult.secure_url);
    console.log("Public ID:", uploadResult.public_id);

    const details = await cloudinary.api.resource(uploadResult.public_id);

    console.log("Detalles de la imagen:");
    console.log("Width:", details.width);
    console.log("Height:", details.height);
    console.log("Format:", details.format);
    console.log("File size bytes:", details.bytes);

    const transformedUrl = cloudinary.url(uploadResult.public_id, {
      secure: true,
      fetch_format: "auto", // f_auto: elige automáticamente el mejor formato
      quality: "auto"       // q_auto: optimiza automáticamente la calidad/peso
    });

    console.log("Done! Click link below to see optimized version of the image. Check the size and the format.");
    console.log(transformedUrl);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
