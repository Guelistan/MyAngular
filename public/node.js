const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Richte Multer für Datei-Uploads ein
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/assets')); // Speichern in public/assets
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Einzigartiger Dateiname
  }
});

// Filter für Dateitypen (nur .png erlauben)
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png') {
    cb(null, true); // Datei akzeptieren
  } else {
    cb(new Error('Nur .png-Dateien sind erlaubt!'), false); // Datei ablehnen
  }
};

const upload = multer({ storage, fileFilter });

// Statische Dateien aus dem Ordner public bereitstellen
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// Endpoint für Datei-Upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nur .png-Dateien sind erlaubt!' });
  }
  res.json({ filePath: `/assets/${req.file.filename}` });
});

// Starte den Server
app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
