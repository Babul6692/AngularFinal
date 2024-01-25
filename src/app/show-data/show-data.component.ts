import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [HttpClientModule,CommonModule, RouterOutlet],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css'
})
export class ShowDataComponent {

  mydata:any
  buttonClicked=false
  url = "http://localhost:8080/"
  constructor(private httpclient:HttpClient){

  }

  onClick(){
    this.httpclient.get(this.url+'getData').subscribe({
      next :(data)=>{
      console.log(data)
      this.mydata=data
    },
     error :(err)=>{
      console.log(err)
     }})
     this.buttonClicked=true
  }
}
