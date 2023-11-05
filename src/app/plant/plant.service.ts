import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.development';

import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPlants():Observable<Plant[]> {
    console.log(this.apiUrl)
    return this.http.get<Plant[]>(this.apiUrl);
  }

}
