import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginformid: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.loginformid = this.fb.group({
email: ['', [Validators.required, Validators.email]],
pwd: ['', Validators.required]
    });
  }
  loginSave(form) {

  }

}
