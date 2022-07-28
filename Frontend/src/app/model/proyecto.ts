export class Proyecto {
    id? : number;
    titulo : string;
    resumen : string;
    enlace : string;
    imagen : string;

    constructor(titulo: string, resumen: string, enlace: string, imagen: string){
        this.titulo = titulo;
        this.resumen = resumen;
        this.enlace = enlace;
        this.imagen = imagen;
    }
}