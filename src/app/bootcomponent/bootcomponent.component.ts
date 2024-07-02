import { Component } from '@angular/core';

@Component({
  selector: 'app-bootcomponent',
  templateUrl: './bootcomponent.component.html',
  styleUrl: './bootcomponent.component.css'
})
export class BootcomponentComponent {

  Products = [
    {ProductId:101, ProductTitle:"Smartwatch", Productprice:10000,img:"assets/images/smartwatch.jpeg"},
    {ProductId:102, ProductTitle:"Smart TV", Productprice:20000,img:"assets/images/smarttv.jpeg"},
    {ProductId:103, ProductTitle:"Iron", Productprice:30000,img:"assets/images/iron.jpeg"},
    {ProductId:104, ProductTitle:"Men Jeans", Productprice:40000,img:"assets/images/jeans.jpeg"},
    {ProductId:105, ProductTitle:"Shoes", Productprice:50000,img:"assets/images/shoes.jpeg"},
    {ProductId:106, ProductTitle:"SmartPhone", Productprice:60000,img:"assets/images/smartphone.jpeg"}
  ]
}
