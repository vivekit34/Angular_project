import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-component2',
  templateUrl: './bootstrap-component2.component.html',
  styleUrl: './bootstrap-component2.component.css'
})
export class BootstrapComponent2Component {

  employees = [
    {empId:101, empName:"Vivek1", empSal:45000,empdegn:'SDE'},
    {empId:102, empName:"Vivek2", empSal:79000,empdegn:'SDE'},
    {empId:103, empName:"Vivek3", empSal:80000,empdegn:'SDE'},
    {empId:104, empName:"Vivek4", empSal:57000,empdegn:'SDE'},
    {empId:105, empName:"Vivek5", empSal:59000,empdegn:'SDET'},
    {empId:106, empName:"Vivek6", empSal:60000,empdegn:'SDET'}
  ];
}
