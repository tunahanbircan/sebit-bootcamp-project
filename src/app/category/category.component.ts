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
  postNumber: number = 0
  categoryObj:any
  tags:Array<any>=['foo','bar','baz']
  constructor(private dataService: DataService, private route : ActivatedRoute, private httpClient : HttpClient, private router:Router) {
    this.categories = dataService.categories;
    this.posts = dataService.posts;
  }
  ngOnInit(): void {
    //get categoryId  by redirected url
    this.categoryId = this.route.snapshot.paramMap.get('categoryid')
    //get category information by redirected url
      if (this.categoryId) {
        // index number starts 0 but
        this.category = this.categories[Number(this.categoryId) - 1]
      }
    //pulling posts by category
      this.postsObj = this.posts.filter((p =>p.category_id.toString().includes(`${this.categoryId}`)))
      //how many posts in this category
      this.postNumber = this.postsObj.length
  }

  //sorting the given posts by date
  get sortByDate() {
    if (this.postsObj) {
      return this.postsObj.sort((a: any, b: any) => {
        return <any>new Date(b.date) - <any>new Date(a.date);
      });
    }
    return this.postsObj
  }
}


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Category, DataService, Post } from '../service/data.service';

// @Component({
//   selector: 'app-category',
//   templateUrl: './category.component.html',
//   styleUrls: ['./category.component.scss']
// })
// export class CategoryComponent implements OnInit {

//   categoryid:any
//   categoryObj:any
//   tags:Array<any>=['foo','bar','baz']

//   categories: Array<Category>;
//   posts!: Array<Post>;
//   constructor(private dataService: DataService, private router:Router, private route : ActivatedRoute, private httpClient : HttpClient) {
//     this.categories = dataService.categories;
//     this.posts = dataService.posts;
//   }

//   ngOnInit(): void {
//     //get post id from url
//     this.categoryid=this.route.snapshot.paramMap.get('postid')
//     //get the post according to the received post id number
//     this.httpClient.get('../../../api/categories.json').subscribe((response:any)=>{
//       this.categoryObj=response.posts[Number(this.categoryid)-1]
//     })
//   }

// }
