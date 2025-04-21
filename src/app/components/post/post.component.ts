import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'] // Korrektur hier
})


export class PostComponent {


  imageUploadedTime: string | null = null;
  @Input() img: string = "";
  @Input() name: string = "";
  @Input() text: string = "";
  getCurrentTime(): string {
    return new Date().toLocaleString(); // Bietet Datum und Zeit im lokalen Format
  }


  onImageUpload(): void {
    // Simulate image upload logic
    this.imageUploadedTime = this.getCurrentTime();
  }
}

