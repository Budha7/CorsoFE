import { Component } from '@angular/core';
import { map } from 'rxjs';
import { RestCountriesService } from './rest-countries.service';
import { Country } from './rest-countries/country';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Corso FE Angular';
  lista = ["css", "javascript","HTML","scss"];
  valore_base = "css";
  img_esempio = '//flagcdn.com/dz.svg';
 
  //assegno a countries Country
  countries3: Country[];

  selezionato = '';
  onSelected(selectedValue: string) {
    this.selezionato = selectedValue;
  }

  constructor(
    //private httpClient: HttpClient
    private restcountryService: RestCountriesService
  ) { }


  loadCountries(){
    //Richiamo la GetCountries, utilizzo la funzione subscribe per la gestione dei dati ricevuti dalla getCountries,
    //assegnando a countries quanto estratto, manipolando i dati e dividendoli per la visualizzazione
    this.getCountries().subscribe( (x) => {
      //assegno il risultato a countries
        this.countries3 = x;
        //Piazzo nel local Storage la lista presa dal json
        localStorage.setItem('countryList', JSON.stringify(x));
        //Richiamo refreshCountries per visualizzare solo una parte dei risultati
    })
  }



 //Metodo per effettuare la get da http a Country selezionando tutto
 getCountries(): any {
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


selezioneTrePaesi(){
 
  var countries = JSON.parse(localStorage.getItem('countryList')); 

  var index = Math.floor(Math.random()*countries.length); 

  alert("selezione tre paesi " + countries[index]["nome"]);
}



}