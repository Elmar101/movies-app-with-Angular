import { Component, OnInit } from '@angular/core';
import { MoviesDataSource } from 'src/app/models/dataSource';
import { DataModel } from './../../models/dataModels';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies:DataModel[] = MoviesDataSource;

  selectedMovie!:DataModel;

  constructor() { }

  ngOnInit(): void {
  }

  selectedMovies(movie:DataModel):void{
    this.selectedMovie = movie;
  }

}
