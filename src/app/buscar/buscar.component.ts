import { Component, OnInit } from '@angular/core';
import {PokedexService} from "../_SERVICES/pokedex.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  data: any;
  nameForm: FormGroup | any;
  card: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private pokedexService: PokedexService
  ) {
  }

  ngOnInit(): void {

    this.nameForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required])
    });


  }

  get form() { // @ts-ignore
    return this.nameForm.controls;
  }


  buscar() {

    if(this.form['name'].value.length < 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Advertencia...',
        text: 'Tiene que ingresar el nonbre del pokemon'
      })
    } else {

    this.pokedexService.getBuscarPokemons(this.form['name'].value).subscribe(
      res => {
        if(res){
          this.card = true;
        }
        this.data = res
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El nombre del pokemon no es el correcto'
        })
      }
    );
  }
    }

}
