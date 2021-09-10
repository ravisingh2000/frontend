import { Component } from '@angular/core';
import { MainService } from './service/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanstack';

 
  ngOnInit(): void {
    console.log("hello")
  }
  constructor(private service:MainService ){
  
  }
  
  

}
