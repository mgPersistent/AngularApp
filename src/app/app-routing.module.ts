import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppPluginsComponent } from './app-plugins/app-plugins.component';


const routes: Routes = [
  {path:'showPlugins/:name',component: AppPluginsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
