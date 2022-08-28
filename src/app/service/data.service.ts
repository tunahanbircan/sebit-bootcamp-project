import { Injectable } from '@angular/core';
import categoriesData from '../../../api/categories.json';
import postsData from '../../../api/posts.json';

export interface Category {
  id: Number;
  name: String;
  description: String;
  icon: any;
}

export interface Post {
  id: Number;
  category_id: Number;
  title: String;
  description: String;
  author: String;
  date: String;
}

@Injectable({
  providedIn: 'root',
})
export class DataService{
  categories: Array<Category> = categoriesData.categories;
  posts: Array<Post> = postsData.posts;
}
