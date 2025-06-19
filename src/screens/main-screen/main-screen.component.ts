import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";

@Component({
  selector: 'app-main-screen',
  imports: [TitleComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  standalone: true,
})
export class MainScreenComponent implements OnInit, OnDestroy {

  constructor() {
    // inicializar las variables
    // inject --> inyectar los servicios (por ejemplo, API CHRONOS)
  }

  ngOnInit(): void {
    // mostrar un loading
    // llamar a nuestra API por HTTP
  }

  ngOnDestroy(): void {
    // unsubscribe de un observable
  }
}
