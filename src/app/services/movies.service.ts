import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataModel } from '../models/dataModels';
import { MoviesDataSource } from '../models/dataSource';
import { SigninService } from './signin.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private signinService: SigninService) { }

  public getAllMovies():Observable< DataModel[] >{
    this.signinService.addMessage('Butun Filmlerin Listesi')
    return of(MoviesDataSource);
  }

}
