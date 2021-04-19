import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { DataModel } from '../../models/dataModels';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies!:DataModel[] ;

  selectedMovie!:DataModel;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchAllMovies();
  }

  selectedMovies(movie:DataModel):void{
    this.selectedMovie = movie;
  }

  fetchAllMovies(){
    this.moviesService.getAllMovies()
         .subscribe(response=> this.movies = response);
  }

}
