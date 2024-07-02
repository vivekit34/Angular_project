import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  name:String="Vivek Kumar Singh";
  age:Number=25;
  salary:Number=30000;
  getName(){
    return `My name is: ${this.name}`;
  }
}
