import { Component } from '@angular/core';

export interface Item {
  Nombre: string;
  Costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'material-app';

  items: Item[] = [
    { Nombre: 'Notebook', Costo: '$1000' },
    { Nombre: 'PC Escritorio', Costo: '$1500' },
    { Nombre: 'Impresora', Costo: '$500' },
    { Nombre: 'Monitor', Costo: '$300' }
  ];

  mostrarLista = true;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  columnas: string[] = [
    'Nombre',
    'Costo'
  ];
}