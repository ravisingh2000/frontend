import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  ngOnInit(): void {
    this.getDataFromAPI()
    
 }
 constructor(private service:MainService,private router:Router ,private Appp:AppComponent){
    // this.key.emit(false)
    // this.key="false"
  
 }
 firstname: string = "";
 lastname: string = "";
 password: string = "";
 cnpassword: string = "";
 email: string = "";
 answer: string = "";
 txtEmpPhone = ""
 data: any;
 key:boolean=false
  
 getDataFromAPI() {
   this.service.getTokenApi().subscribe((result: any) => {
     if (result.name == true) {
       this.service.reloadApii(result.data);
       this.router.navigate(['/profile'])
     }
   }, (error: any) => {
     console.log(error)
   })
 }
 CheckUser(email:any){
   console.log(email.value)
   this.service.getExistApi({Email:email.value}).subscribe((result: any) => {
     console.log(result.body.value)
    if (result.body.value== true) {
      console.log(result.body.value)
      //  this.status.emit(true)
       this.key=true
    }
    else{
      //  this.status.emit(false)
       this.key=false
    }
  }, (error: any) => {
    console.log(error)
  })
            // this.service.g
            // etExistApi({})
 }
 
 registerUser(data: any) {
   console.log(data.invalid);
   this.service.registerApi({
     data: data.value
   }
   ).subscribe({
     next: data => {
         console.log("data recieved REGISTER")
       if (data.body.valid == true) {
         this.router.navigate(['/login'])
       }
     },
     error: err => {
       console.log(err)
     }
   })
 }

}
