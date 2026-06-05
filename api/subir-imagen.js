import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dzxqltjeq",
  api_key: "236469146362133",
  api_secret: "TU_API_SECRET"
});

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      error: "Método no permitido"
    });
  }

  try {

    const { imagen } = req.body;

    const resultado = await cloudinary.uploader.upload(imagen, {
      folder: "app-vivero"
    });

    return res.status(200).json({
      ok: true,
      imagenUrl: resultado.secure_url
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      ok: false,
      error: error.message
    });
  }
}