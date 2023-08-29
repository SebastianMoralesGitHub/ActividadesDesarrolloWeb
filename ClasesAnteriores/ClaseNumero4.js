/* Clases: */

//clase padre
class Animal{
    constructor(especie,color,sonido,habitat){ //constructor padre
        this.especie = especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat; //parametros
    }
    movimiento(Tipo_movimiento){ //metodos de la clase padre
        console.log(`Mi movimiento es: ${Tipo_movimiento}`);
    }
    Comida(Tipo_Comida){
        console.log(`Yo consumo el tipo de comida: ${Tipo_Comida}`);
    }
    Determinar_especie(){
        return this.especie;
    }
    Determinar_color(){
        return this.color;
    }
    Determinar_sonido(){
        return this.sonido;
    }
    Determinar_habitat(){
        return this.habitat;
    }
}
// clase hijo
class Dog extends Animal{
    constructor(raza,color,sonido){
        //this.raza = raza; está comentado porque en el constructor padre
        //this.color = color; ya está definido
        //this.sonido = sonido;
        super(raza,color,sonido,'La casa xd'); //Inicializa el constructor padre
    }
    sentarse(){ //metodo propio de la clase hija
        console.log(`Sentadito xd`)
    }
}

const Golden = new Dog('Golden retreiver','dorado','Guau'); //creacion de un nuevo objeto clase padre
Golden.sentarse(); //Llamar a un metodo de la clase hija
console.log(Golden.Determinar_sonido()); //Llamar a un metodo de la clase padre

const Chihuahua = new Dog('Chihuahua','negroide','GUaguaugauagua'); //lo mismo de arriba xd
console.log(Chihuahua.color);
Chihuahua.sentarse();

/* ------------------------------- */

//Clase con objetos: 

class Musica {
    constructor(info){
        this.fechalanzamiento = info.fechalanzamiento;
        this.artista = info.artista;
        this.genero = info.genero;
        this.titulo = info.titulo;
    }
    reproducir(){
        console.log(`Se está reproduciendo ${this.titulo} del artista ${this.artista}`);
    }
    pausar(){
        return `Se ha pausado ${this.titulo} del artista ${this.artista}`;
    }
}
//creacion del objeto
const informacion = {
    fechalanzamiento: 1989,
    artista: 'Madona',
    genero: 'pop',
    titulo: 'like a virgin'
};
const Pop = new Musica(informacion);
Pop.reproducir();
console.log(`${Pop.pausar()}`)

const Drinkee = new Musica(
    {fechalanzamiento: 2016,
    artista: 'Sofi Tukker',
    genero: 'Dance/Electrónica',
    titulo: 'Drinkee'}
);

Drinkee.reproducir();
console.log(`${Drinkee.pausar()}`)
