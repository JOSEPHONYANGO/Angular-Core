import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  name:string = 'Interpolation Component';
  cars=['mazda','subaru','suzuki'];

  person={name:'Angie',age:23,car:'Toyota'};

  isRich=true;

  constructor() { }

  ngOnInit(): void {
  }

}
