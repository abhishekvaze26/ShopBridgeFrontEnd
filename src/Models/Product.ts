export class Product{
  ProductId:number;
  ProductName:string;
  ProductPrice:number;
  ProductDescription:string;

  constructor(name:string, price:number, description:string){
    this.ProductName=name;
    this.ProductPrice=price;
    this.ProductDescription=description;
  }

  // public static GetProductList(){
  //   var listOfProducts = new Array<Product>();
  //   listOfProducts=[
  //     new Product("Poco F1",21000,"Android phone"),
  //     new Product("MI A3",14000,"Android phone"),
  //     new Product("Samsung M21",16000,"Android phone"),
  //   ];

  //   return listOfProducts;
  // }
}
