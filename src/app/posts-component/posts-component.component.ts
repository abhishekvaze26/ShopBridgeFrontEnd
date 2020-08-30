import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {

  constructor(http:HttpClient) {
    http.get("https://localhost:44366/api/Products").subscribe(Response=>{
      console.log(Response);
    });
  }

  ngOnInit(): void {
  }

}
