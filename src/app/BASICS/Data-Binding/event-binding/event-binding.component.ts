import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  clicks=0;
  someText: any;

  MyCoolButtonClicked(){
    console.log('This Button has clicked');
    this.clicks++;
    const someText = "";
  }
  showInput(el:any){
    console.log(el.target.value);
    this.someText=el.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
