import {Component} from '@angular/core';
import {Post, SearchKey} from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: "React",
      text: "JavaScript-библиотека для создания пользовательских интерфейсов",
      id: 1
    },
    {
      title: "Angular",
      text: "Angular is an app-design framework and development platform for creating efficient and sophisticated single-page apps.",
      id: 2
    },
    {
      title: "Vue",
      text: "Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces",
      id: 3
    },
    {
      title: "Node.js",
      text: "Node.js® — це JavaScript–оточення побудоване на JavaScript–рушієві Chrome V8.",
      id: 4
    }
  ]
  searchInput = ''
  searchKey: SearchKey = 'title';

  updatePosts(event: Post): void {
    event.id = this.posts.length + 1;
    this.posts.unshift(event);
  }

  removeIdPost(id: number): void {
    this.posts = this.posts.filter((item) => item.id != id);
  }

  onChangeSearch(event: string): void {
    this.searchInput = event;
  }


  onSearchKeyChange($event: SearchKey) {
    this.searchKey = $event;
  }
}
