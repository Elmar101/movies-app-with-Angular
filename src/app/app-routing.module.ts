import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies-all/movies.component';
import { DashboardComponent } from './components/simple-component/dashboard/dashboard.component';

const routes: Routes = [
  {path: '',  redirectTo: 'dashboard' , pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'movies' , component:  MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
