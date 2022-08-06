export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    bio: String;
    img: String;
    banner: String;

    constructor(nombre: String,apellido: String, bio: String, img: String, banner: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.bio = bio;
        this.img = img;
        this.banner = banner;
    }
}
