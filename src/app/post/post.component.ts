import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, DataService, Post } from '../service/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  categories: Array<Category>;
  posts!: Array<Post>;
  postId:any;
  postObj:any;
  tags:Array<any>=['foo','bar','baz']
  constructor(private dataService: DataService, private route : ActivatedRoute, private router:Router) {
    this.categories = dataService.categories;
    this.posts = dataService.posts;
  }

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postid')
      if (this.postId) {
        this.postObj = this.posts[Number(this.postId) - 1]
      }
  }
}
