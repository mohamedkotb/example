import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit() {
  }

  getdata(){
    this.authService.getUsers()
    .pipe(first())
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  logOut(){
    localStorage.removeItem('loginBy');
    localStorage.removeItem('token');
    location.reload(true);
    }
}
