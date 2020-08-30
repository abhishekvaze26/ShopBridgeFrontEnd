import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { ShareDataService } from '../Services/share-data.service';
import { Product } from 'src/Models/Product';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {

  constructor(private service:DataHandlerService,private sharedData:ShareDataService) { }
  productToDisplay:Product;
  productName:string;
  productDescription:string;
  prodcutPrice:number;
  ngOnInit(): void {
    this.productToDisplay = this.sharedData.sharedProduct;
    this.productName = this.productToDisplay.ProductName;
    this.productDescription = this.productToDisplay.ProductDescription;
    this.prodcutPrice = this.productToDisplay.ProductPrice;
    console.log("Inside display product:"+this.productToDisplay.ProductName);
  }

}
