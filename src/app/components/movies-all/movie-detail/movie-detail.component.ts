import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/dataModels';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input() movieDetail!:DataModel;

  constructor() { }

  ngOnInit(): void {
  }

}
