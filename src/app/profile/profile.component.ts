import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'meanstack';
  firstname = "";
  lastname = "";
  password = "";
  email = "";
  college = "";
  password_confirmation: any;
  constructor(private service: MainService, private router: Router) {
    this.service.userStatus.emit(true);
  }

  ngOnInit(): void {
    this.reloadUser()
  }
  updateUser(data: any) {
    this.service.updateApi({
      data: data.value
    }).subscribe({
      next: data => {
        console.log("data recieved REGISTERing")
        this.firstname = data.body.data.FirstName;
        this.lastname = data.body.data.LastName;
        this.email = data.body.data.email;
        this.college = data.body.data.college;
      },
      error: err => {
        console.log('error occured in Regsitering User')
      }
    })
  }

  reloadUser() {
    const result = this.service.reloadApi();
    //console.log("resonse");
    if (result != undefined) {
      this.firstname = result.FirstName;
      this.lastname = result.LastName;
      this.email = result.email;
      this.college = result.body.college;
    }
    else {
      this.service.getTokenApi().subscribe((result: any) => {
        if (result.valid == true) {
          this.service.userStatus.emit(true);
          this.firstname = result.data.FirstName;
          this.lastname = result.data.LastName;
          this.email = result.data.email;
          this.college = result.data.college;
        }
        else {
          this.router.navigate(['/profile'])
        }

      }, (error: any) => {
        //       console.log(error)
      })
    }

  }
}
