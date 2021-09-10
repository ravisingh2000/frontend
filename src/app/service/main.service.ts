import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  isLogged: boolean = false;
  userStatus = new EventEmitter<boolean>();
  data: any;
  constructor(private http: HttpClient) {
    this.userStatusApi().subscribe((result: any) => {
      this.isLogged = result.value;
      console.log(result.value)

    })
    this.userStatus.subscribe(
      (status: boolean) => {
        this.isLogged = true;
      })
  }

  getTokenApi(): Observable<any> {
    return this.http.get("/api/getdata");
  }
  registerApi(body: object): Observable<any> {
    return this.http.post('/api/register', body, { observe: 'response', withCredentials: true })
  }
  maketemplate(body: object) {
    return this.http.post('/api/template', body, { observe: 'response', withCredentials: true })
  }
  getTemplateApi() {
    return this.http.get("/api/getTemplateData");
  }
  getExistApi(body: object) {
    return this.http.post('/api/validEmailUser', body, { observe: 'response', withCredentials: true })

  }
  gettemplate(data: any) {
    console.log("template")
    console.log(data)
    return this.data = data;
  }

  loginApi(body: object): Observable<any> {
    return this.http.post('/api/profile', body, { observe: 'response', withCredentials: true })
  }

  updateApi(body: object): Observable<any> {
    return this.http.post('/api/update', body, { observe: 'response', withCredentials: true })
  }

  reloadApi() {
    return this.data;
  }

  logoutUserApi(): Observable<any> {
    return this.http.get('/api/signout')
  }

  userStatusApi() {
    return this.http.get('/api/valid')
  }

  reloadApii(data: any) {
    this.data = data;
  }

}
