import { Component, ViewChild, OnInit } from '@angular/core';
import { CropperComponent, ImageCropperResult } from 'angular-cropperjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import FileUploadWithPreview from 'file-upload-with-preview';
import $ from 'jquery';


@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent implements OnInit {
  name = 'Angular 5';
  @ViewChild('angularCropper',{static:true}) public angularCropper: CropperComponent;
  config = [];

  resultImage: any;
  resultResult: any;

  imageUrl:any="";

  
  constructor(
    private sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    const upload = new FileUploadWithPreview('myUniqueUploadId');

    
  }

  CropMe() {
    
    console.log('BoxDetails',this.angularCropper.cropper.getCropBoxData());
    console.log('ImageUrl',this.imageUrl);
    console.log('Plugin','ImageCropper');

  }

  getTools(){
    let d=$("#image-preview").css("background-image");
    this.imageUrl=this.sanitizer.bypassSecurityTrustUrl(d.substr(5,d.length-7));
    $("#image-preview").hide();
    $("#cropper-preview").show();

  }

  resultImageFun(event: ImageCropperResult) {
    let urlCreator = window.URL;
  this.resultResult = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg');
  }

checkstatus(event: any) {
  if (event.blob === undefined) {
    return;
  }
  // this.resultResult = event.blob;
  let urlCreator = window.URL;
  this.resultResult = this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(new Blob(event.blob)));
}
}
