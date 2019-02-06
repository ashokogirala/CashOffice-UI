import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private http :HttpClient,private router:Router){

  }
  ngOnInit() {
    sessionStorage.setItem('token', '');
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  userLogin(value) {
    console.log(this.loginForm.value);
    this.http.post("http://localhost:9090/CashOffice-Test/login",
    {username :this.loginForm.get('username').value,password:this.loginForm.get('password').value})
    .subscribe(response => {
      console.log(response);
      if (response) {
          sessionStorage.setItem(
            'token', 
            btoa(this.loginForm.get('username').value + ':' + this.loginForm.get('password').value)
          );
      this.router.navigate(['home']);
      } else {
          alert("Authentication failed.")
      }
  });
}
} 
