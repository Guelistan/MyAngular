import { Component } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [PostComponent, CommonModule]
})
export class AppComponent {
  title = 'MyAngular';
}
