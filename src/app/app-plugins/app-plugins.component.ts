import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from "@angular/common/http";

export interface Input{
  title:String;
  type:String;
}  

@Component({
  selector: 'app-app-plugins',
  templateUrl: './app-plugins.component.html',
  styleUrls: ['./app-plugins.component.css']
})

export class AppPluginsComponent implements OnInit {
  name : String;
  data : Object;
  constructor(private route:ActivatedRoute,private http: HttpClient) {
    this.name=this.route.snapshot.params.name;
    this.http.get('http://localhost:5000/showPlugins/'+this.name)
    .subscribe(data=>{
      this.data = data;
      console.log(data);
    })
    

    
   }

  ngOnInit() {
    let inputs:Input[]=this.data["inputs"];

    }
  }
