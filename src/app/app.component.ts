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
  <button (click)="onClick()">GREET</button>
  {{greeting}}
  <p>The cars Bishop has</p>
  <div class="container">
  <p>{{cars[2]}}</p>
  <p>{{cars[0]}}</p>
  <p>{{cars[1]}}</p>
  </div>

  <p>Angel is a powerful girl</p>
  <ul> 
  <p>Name:{{person.name}}</p>
  <p>Age:{{person.age}}</p>
  <p>Car:{{person.car}}</p>
  <p>Religion:{{person.religion}}</p>
    </ul>
    <div>
     is{{person.name}} truly rich?{{isRich}}Boolean
    </div>


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
  public greeting="";
  public fontStyles={
    color:"green",
    fontStyle:"italic",
  }
  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial,

  }
  cars=['Suzuki','Mazda','Prado'];//Array

  person={name:"Angel",age:35,car:"Hummer",religion:"Christian"};//Object

  isRich=true;

  constructor(){
    

  }
  onClick (){
    console.log();
    this.greeting='Welcome to Talanta Digital Solution';
    }
}


