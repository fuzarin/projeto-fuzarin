import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Herois } from '../models/Herois';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  private heroisUrl = 'https://api.opendota.com/api/heroes';

  constructor(private http: HttpClient) { }

  getHerois() {
    return this.http.get<Herois[]>(this.heroisUrl);
  }

  getHeroisById(id: number) {
    return this.http.get(this.heroisUrl + id + '/players');
}
}
