import { Component } from '@angular/core';

@Component({
  selector: 'app-pre-attr-dirs',
  templateUrl: './pre-attr-dirs.component.html',
  styleUrl: './pre-attr-dirs.component.css'
})
export class PreAttrDirsComponent {
  isClass1Apply:boolean=false;
  isClass2Apply:boolean=true;
  gettingColorFromComp:string="red"
  gettingSizeFromComp:string="20px"
}
