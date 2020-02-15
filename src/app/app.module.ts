import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

import { MaterialModule } from './material.module';

import { AuthGuardUsers} from './_helpers/auth-user.guard';
import { AuthService } from './providers/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './_helpers/ErrorInterceptor';

import { DialogToken } from './modals/dialog-token';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
    AdminPageComponent,
    DialogToken
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuardUsers  , AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  entryComponents: [DialogToken],
  bootstrap: [AppComponent]
})
export class AppModule { }
