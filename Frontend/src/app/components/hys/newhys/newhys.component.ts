import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades';

@Component({
  selector: 'app-newhys',
  templateUrl: './newhys.component.html',
  styleUrls: ['./newhys.component.css']
})
export class NewhysComponent implements OnInit {
  nombre : string = '';
  nivel : number;

  constructor(private sHabilidades: SHabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const expe = new Habilidades(this.nombre, this.nivel);
    this.sHabilidades.save(expe).subscribe(
      data => {
        alert("Habilidades añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
