import { Component } from '@angular/core';
import { ArgumentOutOfRangeError, reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`<h2> Welcome {{name}}
  
  <input [id]="myId" type="text" value="Joseph">
  <h2 [class]="textColor">Coding is fun</h2> 
  <h2 [ngClass]="messageClasses">Coding Tek</h2>
  <h3 [style.color]="hasError ?'red':'orange'"> Ahero Coding</h3>
  <h2 [style.color]="highlightColor">Yesu Duogo Kendo</h2>
  <h2 [ngStyle]="fontStyles"> TALANTA DIGITAL SOLUTIONS</h2>

  `
    ,
  styles:[`
  .text-success{
    color:green;
  }
  .text-danger{
    color:red;
  }
  .text-special{
    font-style:italic;
  }
    
  `]
})
export class AppComponent {
  public name="codevolution";
  public myId="testId";
  public textColor="text-success";
  public hasError=false;
  public isSpecial=true;
  public highlightColor="blue";
  public fontStyles={
    color:"green",
    fontStyle:"italic",
  }
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial,

  }

  constructor(){
    

  }
}


