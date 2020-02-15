import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

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
