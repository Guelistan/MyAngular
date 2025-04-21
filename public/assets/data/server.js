import express from 'express';
import multer from 'multer';
import path from 'path';
const app = express();
const PORT = 3000; // Port is used in app.listen

// Speicherort für hochgeladene Dateien festlegen
const storage = multer.diskStorage({
  destination: (_, file, cb) => {
    cb(null, path.join(__dirname, 'public/assets')); // Speichern im Ordner public/assets
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Einzigartige Dateinamen erstellen
  }
});

const upload = multer({ storage });

// Route für Datei-Upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (req.file) {
    res.json({ message: 'Bild erfolgreich hochgeladen!', filePath: `C:/Users/user/MyAngular/public/assets/${req.file.filename}` });
  } else {
    res.status(400).json({ message: 'Kein Bild hochgeladen.' });
  }
});

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
