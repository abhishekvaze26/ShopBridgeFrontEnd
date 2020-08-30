import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Models/Product';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ShopBridge';

  constructor(http:HttpClient){
    http.get("https://localhost:44366/api/Products").subscribe(Response=>{
      console.log(Response);
    });
  }
}
