import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide=true;
  constructor(
    private formBuilder: FormBuilder, 
  ) 
  { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:'',
      password:'',
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
  }

}
