import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Corso FE Angular';
  lista = ["css", "javascript","HTML","scss"];
  valore_base = "css";
  
  selezionato = '';
  onSelected(selectedValue: string) {
    this.selezionato = selectedValue;
  }
}
