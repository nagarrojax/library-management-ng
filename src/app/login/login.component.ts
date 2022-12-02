import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    this.httpClient
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEPjC6ccue9hHtJn4vywtFwAqsqrtT6Rk', {...loginForm.value, returnSecureToken: true}
        ,
        
      )
      .subscribe(() => {

        
        window.alert("Succesful login!");
        this.router.navigate(['/catalog'])
        
      }, 
      (error) => 
      {
        let errorMessage = " Signup failed: " + error.error.error.message;
        window.alert(errorMessage);
      }
      );
  }
}