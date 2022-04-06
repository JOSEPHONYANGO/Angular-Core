import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>test 
  works twice {{name}}</h2>
  <h2>{{name.length}}</h2>`,
  styles: [`div{
    color:red;

  }`]
})
export class TestComponent implements OnInit {

  public name="Martin"; 

  constructor() { }

  ngOnInit(): void {
  }

}
