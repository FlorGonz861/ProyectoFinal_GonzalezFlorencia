import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { SHabilidadesService } from 'src/app/service/s-habilidades';

@Component({
  selector: 'app-edithys',
  templateUrl: './edithys.component.html',
  styleUrls: ['./edithys.component.css']
})
export class EdithysComponent implements OnInit {

  habLab: Habilidades = null;

  constructor(private sHabilidades: SHabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.detail(id).subscribe(data =>{
      this.habLab = data;
    }, err =>{
      alert("Error al modificar la habilidad");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidades.update(id, this.habLab).subscribe( data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la habilidades");
         this.router.navigate(['']);
      }
    )
  }
}
