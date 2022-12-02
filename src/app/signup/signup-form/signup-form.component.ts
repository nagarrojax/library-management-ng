import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup = new FormGroup ({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('',[Validators.required])
  });
  constructor(private httpClient: HttpClient, private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.httpClient
    .post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEPjC6ccue9hHtJn4vywtFwAqsqrtT6Rk', {...this.signupForm.value, returnSecureToken: true}
    ).subscribe(
      (response) => 
      {
        console.log(response);
        this.signupForm.reset();
        
        window.alert("succesfully created");
        this.router.navigate(['/login'])
      }, 
      (error) => 
      {
        let errorMessage = " Signup failed: " + error.error.error.message;
        window.alert(errorMessage);
      }
      );
      
  }

}
