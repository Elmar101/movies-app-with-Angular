import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/dataModels';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies: DataModel[] = [];
  moviesLength!: number ;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.moviesService.getAllMovies()
        .subscribe(res => {
          this.movies = res.slice(0,5);
          this.moviesLength = res.length;
        })
  }
}
