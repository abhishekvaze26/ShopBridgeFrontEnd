import { Injectable } from '@angular/core';
import { Product } from 'src/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  sharedProduct:Product;

  constructor() { }
}
