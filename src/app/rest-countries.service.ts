import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Country } from './rest-countries/country';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  indirizzo : string = 'https://restcountries.com/v3.1/';


  constructor(private httpClient: HttpClient) { 
  };

  getCountries(): any{
    //Estrazione e restituzione dei campi indicati nella return e convertiti tramite pipe
    return this.httpClient.get<Country[]>(this.indirizzo + 'all');
  }

  getCountry(code: string): any{
    //Estrazione e restituzione dei campi indicati nella return e convertiti tramite pipe
    return this.httpClient.get<Country[]>(this.indirizzo + 'alpha/' + code);
  }

}

//NUOVO COMPONENT
// Dalla lista prendere 3 paesi,
// si richiama per i 3 paesi la getCountry
// far comparire 3 o 5 bandiere, selezionarla e indovinare la bandiera giusta

