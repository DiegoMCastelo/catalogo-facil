const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const upload = multer({ storage: multer.memoryStorage() });

cloudinary.config({
  cloud_name: "dzxqltjeq",
  api_key: "236469146362133",
  api_secret: "c6Om8s6Aca6mmAYF9OayK09r1nU"
});

app.post("/subir-imagen", upload.single("imagen"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        ok: false,
        mensaje: "No se recibió ninguna imagen"
      });
    }

    const resultado = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "app-vivero/productos",
          resource_type: "image"
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(req.file.buffer);
    });

    res.json({
      ok: true,
      imagenUrl: resultado.secure_url,
      publicId: resultado.public_id
    });

  } catch (error) {
    console.error("Error al subir imagen:", error);
    res.status(500).json({
      ok: false,
      mensaje: "Error al subir imagen a Cloudinary"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});