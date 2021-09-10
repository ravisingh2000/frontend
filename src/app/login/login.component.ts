import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = "";
  password = "";

  constructor(private service: MainService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(data: any) {
    this.service.loginApi({
      data: data.value
    }).subscribe({
      next: result => {console.log(result.body.bcryptValid)
         if (result.body.bcryptValid == true) {

          this.service.reloadApii(result.body.data);
          this.service.userStatus.emit(true);
          this.router.navigate(['/profile'])
        }

      },
      error: err => {
        console.log(err)

      }
    })


  }
  
}
