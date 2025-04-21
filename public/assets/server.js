const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 3000;

// Speicherort für hochgeladene Dateien festlegen
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/assets')); // Speichern im Ordner public/assets
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Einzigartige Dateinamen erstellen
  }
});

const upload = multer({ storage });

// Route für Datei-Upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ message: 'Bild erfolgreich hochgeladen!', filePath: `/assets/${req.file.filename}` });
  } else {
    res.status(400).json({ message: 'Kein Bild hochgeladen.' });
  }
});

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
