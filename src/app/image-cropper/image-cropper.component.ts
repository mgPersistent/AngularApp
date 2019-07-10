import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularCropperjsComponent, ImageCropperResult } from 'angular-cropperjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; 


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {
  name = 'Angular 5';
  @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  config = [];
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Bartholdi_Fountain_in_Washington%2C_D.C._2012.JPG/800px-Bartholdi_Fountain_in_Washington%2C_D.C._2012.JPG";

  resultImage: any;
  resultResult: any;

  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    
  }

  CropMe() {
    // this.resultResult = this.angularCropper.imageUrl;
    console.log("Hello");
    // this.resultImage = this.angularCropper.cropper.getCroppedCanvas()
    // console.log(this.resultImage);
    this.angularCropper.exportCanvas();

  }

  resultImageFun(event: ImageCropperResult) {
    let urlCreator = window.URL;
  this.resultResult = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
  }

checkstatus(event: any) {
  console.log(event.blob);
  if (event.blob === undefined) {
    return;
  }
  // this.resultResult = event.blob;
  let urlCreator = window.URL;
  this.resultResult = this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(new Blob(event.blob)));
}
}
