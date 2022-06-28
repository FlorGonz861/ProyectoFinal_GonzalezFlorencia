export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    imagen_perfil: string;
    imagen_banner: string;

    constructor(nombre: string, apellido: string, imagen_perfil: string, imagen_banner: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.imagen_perfil = imagen_perfil;
        this.imagen_banner = imagen_banner;
    }
}