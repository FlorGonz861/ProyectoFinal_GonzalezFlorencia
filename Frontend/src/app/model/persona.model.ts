export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    bio: String;
    img: String;

    constructor(nombre: String,apellido: String, bio: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.bio = bio;
        this.img = img;
    }
}