import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup

  isWrong = false;
  constructor( public authService:AuthService , public router:Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null),
      'password': new FormControl(null),
    })
  }

  onSubmit(){

    // this.authService.TokenExpired().
    // pipe(first())
    // .subscribe(
    //   response => {
    //     console.log(response);

    //   },
    //   error => {
    //     console.log(error);
    //   });;
    this.authService.getUsers()
    .pipe(first())
    .subscribe(
      response => {
        console.log(response);
        if (response['admin'].userName==this.loginForm.value.username && response['admin'].password==this.loginForm.value.password) {
          localStorage.setItem('loginBy','admin');
          this.router.navigate(['/admin']);
        } else if (response['user'].userName==this.loginForm.value.username && response['user'].password==this.loginForm.value.password){
          localStorage.setItem('loginBy','user');
          this.router.navigate(['/user']);
        } else {
          console.log('fail');
          this.isWrong = true;
        }

      },
      error => {
        console.log(error);
      });


  }
}
