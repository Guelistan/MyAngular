import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name!: string;
  @Input() img!: string;
  @Input() text!: string;
  likes: number = 0;
  dislikes: number = 0;
  isEditing: boolean = false;
  isDeleted: boolean = false;
  isEdited: boolean = false;

  like(): void {
    this.likes++;
  }

  dislike(): void {
    this.dislikes++;
  }

  delete(): void {
    this.isDeleted = true;
    this.isEditing = false; // Ensure edit mode is disabled
  }

  edit(): void {
    this.isEditing = true;
    this.isDeleted = false; // Ensure the post is not deleted
  }

  save(): void {
    this.isEditing = false;
    this.isEdited = true;
  }

  getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString(); // Returns the current time
  }
}
