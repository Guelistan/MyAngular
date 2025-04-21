/* import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule],
  standalone: true
})/*
export class CardComponent {
  uploadedImage: string = '';
  brightness: number = 100;

  // Methode zum Hochladen des Bildes
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.uploadedImage = e.target.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  // Methode zur Anpassung der Helligkeit
  adjustBrightness(change: number): void {
    this.brightness = Math.max(0, this.brightness + change); // Verhindere negative Werte
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      imageElement.style.filter = `brightness(${this.brightness}%)`;
    }
  }

  // Methode zum Speichern des Bildes
  saveImage(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;

      if (context) {
        context.filter = `brightness(${this.brightness}%)`;
        context.drawImage(imageElement, 0, 0);

        const editedImage = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = editedImage;
        link.download = 'edited-image.png';
        link.click();
      }
    }
  }

  // Methode zum Anwenden der Zoom-Größe
  applyZoom(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      imageElement.style.width = `${rect.width}px`;
      imageElement.style.height = `${rect.height}px`;
      imageElement.style.transform = 'none'; // Transformation zurücksetzen
    }
  }
}
 */
/*
export class CardComponent {
  uploadedImage: string = '';
  brightness: number = 100; // Helligkeit in Prozent

  // Bestehende Methoden...

  uploadToServer(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;

      context.filter = `brightness(${this.brightness}%)`;
      context.drawImage(imageElement, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const formData = new FormData();
          formData.append('image', blob, 'edited-image.png');

          fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data.message);
              alert(`Bild erfolgreich gespeichert: ${data.filePath}`);
            })
            .catch((error) => {
              console.error('Fehler beim Hochladen:', error);
            });
        }
      }, 'image/png');
    }
  }
}
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class CardComponent {
  uploadedImage: string = '';
  brightness: number = 100; // Standardhelligkeit

  // Methode: Bild hochladen
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.uploadedImage = e.target.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  // Methode: Helligkeit ändern
  adjustBrightness(change: number): void {
    this.brightness = Math.max(0, this.brightness + change); // Verhindere negative Werte
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      imageElement.style.filter = `brightness(${this.brightness}%)`;
    }
  }

  // Methode: Zoom-Größe anwenden
  applyZoom(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      imageElement.style.width = `${rect.width}px`;
      imageElement.style.height = `${rect.height}px`;
      imageElement.style.transform = 'none'; // Zurücksetzen der Zoom-Transformation
    }
  }

  // Methode: Bild lokal speichern
  saveImage(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;

      context.filter = `brightness(${this.brightness}%)`;
      context.drawImage(imageElement, 0, 0);

      const editedImage = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = editedImage;
      link.download = 'edited-image.png';
      link.click();
    }
  }

  // Methode: Bild auf den Server hochladen
  uploadToServer(): void {
    const imageElement = document.querySelector('.editable-image') as HTMLImageElement;

    if (imageElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;

      canvas.width = imageElement.naturalWidth;
      canvas.height = imageElement.naturalHeight;

      context.filter = `brightness(${this.brightness}%)`;
      context.drawImage(imageElement, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          const formData = new FormData();
          formData.append('image', blob, 'edited-image.png');

          fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
          })
            .then((response) => response.json())
            .then((data) => {
              alert(`Bild erfolgreich gespeichert: ${data.filePath}`);
            })
            .catch((error) => {
              console.error('Fehler beim Hochladen:', error);
            });
        }
      }, 'image/png');
    }
  }
}
