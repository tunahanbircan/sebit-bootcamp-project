import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category, DataService, Post } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Array<Category>;
  posts!: Array<Post>;
  constructor(private dataService: DataService, private router:Router) {
    this.categories = dataService.categories;
    this.posts = dataService.posts;
  }
  ngOnInit(): void {
  }


  onClick(id: Number){
    console.log(id);
//    this.router.navigate(['/category', ''])
  }

}
