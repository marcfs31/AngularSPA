import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.buscar();
  }

  public buscar() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroes(this.termino);
      console.log(this.heroes);
    });
  }

  verHeroe( i: number ) {
    this.router.navigate( ['/heroe', i] );
  }
}
