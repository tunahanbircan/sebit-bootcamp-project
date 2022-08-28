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
    //get category information by redirected url
      if (this.postId) {
        // index number starts 0 but
        this.postObj = this.posts[Number(this.postId) - 1]
      }

  }

}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Category, DataService, Post } from '../service/data.service';

// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.scss']
// })
// export class PostComponent implements OnInit {

//   categoryId: string | null = ''
//   postsObj!: Post[];
//   category!: Category;
//   postNumber: number = 0
//   categories: Array<Category>;
//   posts!: Array<Post>;
//   constructor(private dataService: DataService, private router:Router, private route : ActivatedRoute, private httpClient: HttpClient) {
//     this.categories = dataService.categories;
//     this.posts = dataService.posts;
//   }

//   ngOnInit(): void {
//     //get categoryId  by redirected url
//     this.categoryId = this.route.snapshot.paramMap.get('categoryid')

//     //get category information by redirected url
//     this.httpClient.get('../../../api/categories.json').subscribe((response: any) => {
//       if (this.categoryId) {
//         // index number starts 0 but
//         this.category = response.categories[Number(this.categoryId) - 1]
//       }
//     })
//     //pulling posts by category
//     this.httpClient.get('../../../api/categories.json').subscribe((response: any) => {
//       this.postsObj = response.posts.filter((x: { category_id: string | null; }) => x.category_id == this.categoryId)
//       console.log(this.postsObj)
//       //how many posts in this category
//       this.postNumber = this.postsObj.length

//     })
//   }

//   //sorting the given posts by date
//   get sortByDate() {
//     if (this.postsObj) {
//       return this.postsObj.sort((a: any, b: any) => {
//         return <any>new Date(b.date) - <any>new Date(a.date);
//       });
//     }
//     return this.postsObj
//   }

// }
