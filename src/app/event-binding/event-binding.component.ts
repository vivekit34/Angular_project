import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  result:any=0;
  addNumbers(number1:any, number2:any){
    var num1, num2, sum;
    num1=parseInt(number1);
    num2=parseInt(number2);
    sum=num1+num2;
    this.result=sum;
  }

  subNumbers(number1:any, number2:any){
    var num1, num2, sub;
    num1=parseInt(number1);
    num2=parseInt(number2);
    sub=num1-num2;
    this.result=sub;
  }

  divideNumbers(number1:any, number2:any){
    var num1, num2, div;
    num1=parseInt(number1);
    num2=parseInt(number2);
    div=num1/num2;
    this.result=div;
  }
  mulNumbers(number1:any, number2:any){
    var num1, num2, mul;
    num1=parseInt(number1);
    num2=parseInt(number2);
    mul=num1*num2;
    this.result=mul;
  }
}
