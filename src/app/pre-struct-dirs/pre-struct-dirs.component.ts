import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-struct-dirs',
  templateUrl: './pre-struct-dirs.component.html',
  styleUrl: './pre-struct-dirs.component.css'
})
export class PreStructDirsComponent {
  isProductDisplay:boolean=false;
  products:string[]=["Smart TV", "Alexa", "Watches"];
  employees=[
  {name:"Vivek", age:23, salary:32000},
  {name:"Shubham", age:26, salary:3900},
  {name:"Vishal", age:25, salary:30030}];
  }
