export class Educacion {
    id? : number;
    tituloEd : string;
    descripcionEd : string;
    tiempoEd : string;

    constructor(tituloEd: string, descripcionEd: string, tiempoEd: string){
        this.tituloEd = tituloEd;
        this.descripcionEd = descripcionEd;
        this.tiempoEd = tiempoEd;
    }
}
