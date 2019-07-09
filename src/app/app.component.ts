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
    {value:'samplePlugin1',viewValue:'Sample Plugin 1'},
    {value:'samplePlugin2',viewValue:'Sample Plugin 2'},
    {value:'ImageCropper',viewValue:'Image Cropper'}
  ];

}
