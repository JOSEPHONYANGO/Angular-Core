import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h2> Welcome {{name}}
  
  <input [id]="myId" type="text" value="Joseph">
  <h2 [class]="textColor">Coding is fun</h2> 
  <h2 [ngClass]="messageClasses">Coding Tek</h2>

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
  public hasError=true;
  public isSpecial=true;
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial,

  }

  constructor(){
    

  }
}


