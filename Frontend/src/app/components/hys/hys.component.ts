import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  hab: Habilidades[]= [];

  constructor(private sHabilidades: SHabilidadesService, private tokenService: TokenService) { }

  isLogged = false;


  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidades(): void {
    this.sHabilidades.lista().subscribe(data => { this.hab = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sHabilidades.delete(id).subscribe(
        data => {
          this.cargarHabilidades();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
