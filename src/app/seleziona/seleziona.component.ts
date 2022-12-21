import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seleziona',
  templateUrl: './seleziona.component.html',
  styleUrls: ['./seleziona.component.css'],
})
export class Seleziona implements OnInit {
  selezionato = '';
  lista = ["css", "javascript","HTML","scss"];
  constructor() {}

  ngOnInit() {}
}
