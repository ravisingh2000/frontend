import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userLogged: boolean=false;
  

  constructor(private service: MainService, private router: Router) { 
    this.service.userStatus.subscribe(
      (status:any)=>{
           this.userLogged=status;
      }
    )

  }

  ngOnInit(): void {
    this.userLogged=this.service.isLogged;
  }
  logoutUser(){
    this.service.logoutUserApi()
    .subscribe({
      next:data=>{
        this.userLogged=false;
        this.service.isLogged=false;
        this.service.userStatus.emit(false);
        this.router.navigate(['/login'])
      },
      error:err => {
        console.log(err)
      }
    })
  }

}
