import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values=[{"API":"","Description":"","Auth":"","HTTPS":"","Category":""}]
  constructor(private api:ApiService){
    this.api.getData().subscribe((data:any)=>{
      this.values=data.entries;
      console.log(this.values)
    })
  }

}
