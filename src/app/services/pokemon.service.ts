import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private endpointUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(private http: HttpClient) { }

  sendData(): Observable<any>{
    return this.http.get<any>(this.endpointUrl);
  }
}
