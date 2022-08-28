import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, DataService, Post } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  categories: Array<Category>;
  posts!: Array<Post>;
  searchInput:string|null=''
  filteredPosts: Post[] = [];
  tags:Array<any>=['foo','bar','baz']

  constructor(private dataService: DataService, private route : ActivatedRoute, private router: Router) {
    this.categories = dataService.categories;
    this.posts = dataService.posts;
  }

  ngOnInit(): void {
    this.searchInput = this.route.snapshot.paramMap.get('text')

    this.filteredPosts = this.posts.filter((p => p.description.toString().toLowerCase().includes((this.searchInput!).toLowerCase()) ||
    p.title.toString().toLowerCase().includes((this.searchInput!).toLowerCase()) ||
    p.author.toString().toLowerCase().includes((this.searchInput!).toLowerCase())
  ))

  this.filteredPosts = this.filteredPosts.sort((a: any, b: any) => {
    return <any>new Date(b.date) - <any>new Date(a.date);
  });
  }
}
