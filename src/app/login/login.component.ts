import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatior } from '../custom-validatior';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginformid: FormGroup;
  constructor(private fb: FormBuilder , private router: Router) { }

  ngOnInit() {
   this.loginformid = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: this.fb.group({
      pwd: ['', Validators.required],
      confirm: ['', Validators.required]
    }, {validator: CustomValidatior.MatchPassword })
    });
  }
  loginSave(form) {
    //console.log('form', form);
    this.router.navigate(['dashboard']);
  }

}
