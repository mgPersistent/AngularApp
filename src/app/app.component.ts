import { Component } from '@angular/core';

export interface Plugin {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  plugins: Plugin[]=[
    {value:'loadPlugin',viewValue:'Load Plugin'},
    {value:'executePlugin',viewValue:'Execute Plugin'}
  ];
}
