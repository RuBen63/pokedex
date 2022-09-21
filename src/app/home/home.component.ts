import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../_SERVICES/pokedex.service";
import {Page} from "ngx-bulma-pagination";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  inioPag: any;

  constructor(
    private pokedexService: PokedexService
  ) { }

  ngOnInit(): void {
    let catidad = 0;
    this.inioPag = 0;
    this.cosulta(catidad);
  }

  cosulta(event: number){
    this.pokedexService.getPokemons(event).subscribe(
      res => {
        this.data = res
        console.log(res)
      },
      error => {}
    );
  }

  pageChange($event: Page) {
    console.log($event.current)
    console.log($event.current - 1)
    let lo = $event.current - 1;
    this.inioPag = lo * 10;
    this.cosulta(this.inioPag)

  }
}
