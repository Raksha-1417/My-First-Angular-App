import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { error } from '@angular/compiler/src/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userurl = environment.userapi;
  registerForm = new FormGroup({
    username: new FormControl(''),
    useremail: new FormControl(''),
    password: new FormControl(''),
    mobile: new FormControl('')
  })
  submitted=false;
  

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router:Router){ }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(6), Validators.maxLength(16)],
      useremail: ['', Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', Validators.required, Validators.pattern('[0-9]*'),Validators.minLength(10)]
    });
  }
  get f() { return this.registerForm.controls; }
  submitHandler() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post<any>(this.userurl, this.registerForm.value)
    .subscribe(res => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

  })
  Toast.fire({
    icon: 'success',
    title: 'Sign Up Successful'
  })
  this.registerForm.reset();
  this.router.navigate(['login']);
})

}
}

