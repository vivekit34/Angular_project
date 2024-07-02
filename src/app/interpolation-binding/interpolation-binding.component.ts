import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-binding',
  templateUrl: './interpolation-binding.component.html',
  styleUrl: './interpolation-binding.component.css'
})
export class InterpolationBindingComponent {
  name: string= "Vivek";
  age: number=20;
  salary: number=20000;
}
