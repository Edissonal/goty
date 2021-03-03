import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { Game } from '../../interfaces/interfaces';
import { subscribeOn } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getnominados()
      .subscribe(juegos => {
        
        console.log(juegos);
        this.juegos = juegos;
      });
  }

  votarJuego(juego: Game) {
    this.gamesService.votarJuego(juego.id)
      .subscribe((resp:any) => {
        console.log(resp);
        if (resp.ok) {
        Swal.fire('Gracias', resp.mensaje,'success');  
        } else {
          Swal.fire('Opss', resp.mensaje, 'error');
        }
      });
  }
  
}
