import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'pokedex';
  logo = 'assets/image/pokebola.png'

  @ViewChild('navBurger') navBurger: any;
  @ViewChild('navMenu') navMenu: any;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
