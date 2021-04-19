import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { MoviesComponent } from './components/movies-all/movies.component';
import { MovieComponent } from './components/movies-all/movie/movie.component';
import { MovieDetailComponent } from './components/movies-all/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/simple-component/navbar/navbar.component';
import { DashboardComponent } from './components/simple-component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    SignInComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
