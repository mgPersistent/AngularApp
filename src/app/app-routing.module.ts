import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPluginsComponent } from './app-plugins/app-plugins.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';


const routes: Routes = [
  {path:'showPlugins/:plugin',component: AppPluginsComponent},
  {path:'imageCropper',component: ImageCropperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
