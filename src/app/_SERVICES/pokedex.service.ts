import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Config} from "@angular/service-worker/config";

const httpOptions = {
  headers: new HttpHeaders({ Accept: 'application/json',
    'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=UTF-8',
    responseType: 'json' })
};

@Injectable({
  providedIn: 'root'
})
export class PokedexService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getPokemons(cantida: any){

    return this.http.get<Config>('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+ cantida);
  }

  getBuscarPokemons(name: any){

    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + name );
  }
}
