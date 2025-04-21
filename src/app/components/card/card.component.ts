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
  brightness: number = 100; // Helligkeit in Prozent

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

  // Methode zum Ändern der Helligkeit
  adjustBrightness(change: number): void {
    this.brightness += change;
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
}
