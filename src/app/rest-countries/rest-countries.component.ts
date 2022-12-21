import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Country } from './country';
import { RestCountriesService } from '../rest-countries.service';

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.scss']
})
export class RestCountriesComponent implements OnInit {

  //assegno a countries Country
  countries: Country[]
  
  //Paginazione
  //Pagina iniziale da visualizzare
  page = 1;
  //Numero totale elementi
  collectionSize = 250;
  //Righe per pagina
  pageSize = 15;

  constructor(
    //private httpClient: HttpClient
    private restcountryService: RestCountriesService
  ) { }

  ngOnInit(): void {
    //richiamo getCountries
    this.loadCountries();
    //this.getCountries().subscribe(x => {console.log(x)})
  }

  loadCountries(){
    //Richiamo la GetCountries, utilizzo la funzione subscribe per la gestione dei dati ricevuti dalla getCountries,
    //assegnando a countries quanto estratto, manipolando i dati e dividendoli per la visualizzazione
    this.getCountries().subscribe( (x) => {
      //assegno il risultato a countries
        this.countries = x;
        //Piazzo nel local Storage la lista presa dal json
        localStorage.setItem('countryList', JSON.stringify(x));
        //Richiamo refreshCountries per visualizzare solo una parte dei risultati
        this.refreshCountries(); // Display the first page
    })
  }

  //Utilizzato nella paginazione per restituire un numero di risultati alla volta (NG-BOOTSTRAP)
  refreshCountries(){
    this.countries = JSON.parse(localStorage.getItem('countryList'))
    .map((country, i) => ({id: i + 1, ...country}))
    .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  //Metodo per effettuare la get da http a Country selezionando tutto
  getCountries(): any{
    //Estrazione e restituzione dei campi indicati nella return e convertiti tramite pipe
    return this.restcountryService.getCountries().pipe(
      //con map + pipe su concatenano i risultati ottenuti e infine si restituiscono
      map((response:any) => {
          //Prendo la response della get, mappo i dati in essa contenuti
          return response.map(e => {
            //Nella return prendo solo i dati che mi servono dal Json.
            return { 
              bandiera: e.flags.png,
              nome: e.name.common, 
              capitale: e.capital, 
              popolazione: e.population, 
              area: e.area, 
              continente: e.continents[0]
            };
          })
      })
    );
  }
}