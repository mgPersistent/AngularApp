import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from "@angular/common/http";

export interface InputBox{
  title:string;
  type:string;
}
export interface RadioButton{
  title:string;
  options:Array<string>;
}
export interface CheckBox{
  title:string;
  options:Array<string>;
}      

@Component({
  selector: 'app-app-plugins',
  templateUrl: './app-plugins.component.html',
  styleUrls: ['./app-plugins.component.css']
})

export class AppPluginsComponent implements OnInit {
  name : String;
  data : Object;
  inputs: Array<InputBox> = [];
  radiobuttons: Array<RadioButton> = [];
  checkboxes: Array<CheckBox> = [];
  constructor(private route:ActivatedRoute,private http: HttpClient,private router:Router) {
    this.route.params.subscribe(params =>{
      this.name=params['plugin'];
      if(this.name=="ImageCropper")
        router.navigate(['imageCropper']);
      this.inputs=[];
      this.radiobuttons=[];
      this.checkboxes=[];
      this.getJsonData();
    });
   }

   getJsonData(){
    this.http.get('http://localhost:5000/showPlugins/'+this.name)
    .subscribe(data=>{
      this.data = data;
      
      this.data["inputs"].forEach(element => {
        this.inputs.push({title:element["title"],type :element["type"]})
      });
      this.data["radiobuttons"].forEach(element => {
        this.radiobuttons.push({title:element["title"],options : element["options"]})
      }); 
      this.data["checkboxes"].forEach(element => {
        this.checkboxes.push({title:element["title"],options :element["options"]})
      });  
      
    });
  }

  ngOnInit() {
    
  }
    
  }
 
  
