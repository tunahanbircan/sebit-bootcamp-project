import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput:any
  form = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    body: new FormControl(null, [Validators.required]),
  });

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchForm = new FormGroup({
    searchInput: new FormControl()
  });

  onSubmit() {
    this.router.navigate([`search/${this.searchForm.value.searchInput}`])
    .then(()=>{
      window.location.reload()
    });
    this.searchForm = new FormGroup({
      searchInput: new FormControl()
    })

  }
}
