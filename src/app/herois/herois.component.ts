import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Herois } from '../models/Herois';
import { HeroisService } from '../services/herois.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {
public herois: Herois[] = [];

  dota = [
    {nomeHeroi: 'Invoker', nivelHabilidade: 'Dificil', quantidadePicks: '< 50 em 15 partidas', editarHeroi: 'fa-edit'},
    {nomeHeroi: 'Sniper', nivelHabilidade: 'Facil', quantidadePicks: '> 100 em 189 partidas', editarHeroi: 'fa-edit'}
];

  constructor(private service: HeroisService, private router: Router) { }

  ngOnInit(): void {
    this.service.getHerois().subscribe((data: Herois[])=>{
      this.herois = data;
    })
  }

  navigateToHeroi(id: number) {
    this.router.navigate([
      'heroes/' + id
    ])
  }

}
