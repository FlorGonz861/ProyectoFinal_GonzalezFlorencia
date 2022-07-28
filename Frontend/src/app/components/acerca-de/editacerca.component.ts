import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editacerca',
  templateUrl: './editacerca.component.html',
  styleUrls: ['./editacerca.component.css']
})
export class EditacercaComponent implements OnInit {

  perlab: persona = null;

  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.perlab = data;
      }, err =>{
        alert("Error al modificarla la persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.perlab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar la persona");
         this.router.navigate(['']);
      }
    )
  }

}

