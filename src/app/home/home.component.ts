import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Products = [
    {ProductId:101, ProductTitle:"Mobiles", Productprice:10000,img:"assets/images/mobiles.jpeg", cardtext:"Smartphone from different brands"},
    {ProductId:102, ProductTitle:"Smart TV", Productprice:20000,img:"assets/images/smarttv.jpeg", cardtext:"Smart TV from different brands"},
    {ProductId:103, ProductTitle:"Clothes", Productprice:30000,img:"assets/images/clothes.jpeg", cardtext:"Clothes from different brands"}
  ]
}
