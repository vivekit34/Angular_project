import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-calculator',
  templateUrl: './event-binding-calculator.component.html',
  styleUrl: './event-binding-calculator.component.css'
})
export class EventBindingCalculatorComponent {
  result:any;
  addData(data1:any, data2:any){
    var sum:any;
    sum= parseInt(data1)+ parseInt(data2);
    this.result=sum;
  }

  subData(data1:any, data2:any){
    var sum:any;
    sum= parseInt(data1)- parseInt(data2);
    this.result=sum;
  }

  mulData(data1:any, data2:any){
    var sum:any;
    sum= parseInt(data1)*parseInt(data2);
    this.result=sum;
  }

  divData(data1:any, data2:any){
    var sum:any;
    sum= parseInt(data1)/parseInt(data2);
    this.result=sum;
  }
}
