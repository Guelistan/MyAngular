import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})


export class PostComponent {


  imageUploadedTime: string | null = null;
  @Input() img: string="";
  @Input() name: string="";
  @Input() text: string="";
  getCurrentTime(): string {
    const currentTime = new Date();
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1; // Months are zero-based
    const year = currentTime.getFullYear();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const timeZoneOffset = currentTime.getTimezoneOffset() * 60; // Convert to seconds
    const localTimeInSeconds = currentTime.getTime() / 1000 + timeZoneOffset;
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  onImageUpload(): void {
    // Simulate image upload logic
    this.imageUploadedTime = this.getCurrentTime();
  }
}

