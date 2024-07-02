import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bindings',
  templateUrl: './event-bindings.component.html',
  styleUrl: './event-bindings.component.css'
})
export class EventBindingsComponent {
  sendData(data1:any, data2:any){
    console.log(data1);
    console.log(data2);
  }
}
