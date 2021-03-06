import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  private getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes: Hero[]) => {
        this.heroes = heroes;
      });
  }
}
