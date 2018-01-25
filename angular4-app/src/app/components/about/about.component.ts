import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts:Posts[];

  constructor(private dataService:DataService) { }

  ngOnInit() {
      this.dataService.getPost().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

}

interface Posts{
  id: number,
  name: string,
  email: string,
  username: string,
  phone: string
}