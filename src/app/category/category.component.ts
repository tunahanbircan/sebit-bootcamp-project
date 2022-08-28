import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Category, DataService, Post } from '../service/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryid:any
  categories: Array<Category>;
  posts!: Array<Post>;
  categoryId: string | null = ''
  postsObj!: Post[];
  category!: Category;
  postNumber: number = 0;
  categoryObj:any;
  tags:Array<any>=['foo','bar','baz']
  constructor(private dataService: DataService, private route : ActivatedRoute, private httpClient : HttpClient, private router:Router) {
    this.categories = dataService.categories;
    this.posts = dataService.posts;
  }
  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryid')
      if (this.categoryId) {
        this.category = this.categories[Number(this.categoryId) - 1]
      }

      this.postsObj = this.posts.filter((p =>p.category_id.toString().includes(`${this.categoryId}`)))
      this.postNumber = this.postsObj.length
  }
  get sortByDate() {
    if (this.postsObj) {
      return this.postsObj.sort((a: any, b: any) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    }
    return this.postsObj
  }
}
