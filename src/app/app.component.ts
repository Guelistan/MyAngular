import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';

interface Post {
  img: string;
  name: string;
  text: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>('assets/data/post.json').subscribe(data => {
      this.posts = data.map(post => ({
        ...post,
        getCurrentTime: this.getCurrentTime,
        onImageUpload: this.onImageUpload
      }));
    });
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }

  onImageUpload(): void {
    console.log('Image uploaded');
  }
}
