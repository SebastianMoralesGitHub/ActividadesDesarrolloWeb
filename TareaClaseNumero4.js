class Transporte //clase padre
{
    constructor (caracteristicas)
    {
        this.Nombre_de_transporte = caracteristicas.Nombre_de_transporte
        this.Tipo_de_propulsion = caracteristicas.Tipo_de_propulsion
        this.matricula = caracteristicas.matricula
        this.CapacidadMax = caracteristicas.CapacidadMax
        this.VelocidadMax = caracteristicas.VelocidadMax
    }
    Encender()
    {
        console.log(`Se ha encendido el siguiente transporte: ${this.Nombre_de_transporte}`)
    }
    MostrarCaracteristicas()
    {
        console.log(`Nombre del transporte: ${this.Nombre_de_transporte}\n
        Tipo de propulsion: ${this.Tipo_de_propulsion}\n
        matricula: ${this.matricula.Codigo_matricula} \n 
        Propietario: ${this.matricula.Nombre_Propietario}\n
        Capacidad maxima: ${this.CapacidadMax}\n
        Velocidad máxima: ${this.VelocidadMax}`)
    }
    ElevarVelas()
    {
        console.log(`Se han elevado las velas del siguiente Transporte: ${this.Nombre_de_transporte}`)
    }
} 
class Barco extends Transporte 
{
    constructor(caracteristicas) 
    {
        super(caracteristicas);
    }
    LevarAnclas()
    {
        console.log(`El barco ${this.Nombre_de_transporte} está levando anclas`)
    }
    SubirVelocidad()
    {
        console.log(`El barco ${this.Nombre_de_transporte} está subiendo la velocidad`)
    }
}
const Titanic = new Barco 
(
    {Nombre_de_transporte:'Crusero titanic',Tipo_de_propulsion:'Motores a Vapor'
    ,matricula:{Codigo_matricula: "J288", Nombre_Propietario: "Maicol yason"},CapacidadMax:'3547 loquitos',
    VelocidadMax:'12 km/h'}
)
const LaSantaMaria = new Barco 
(
    {Nombre_de_transporte:'Velero Santa Maria',Tipo_de_propulsion:'Propulsion por viento'
    ,matricula:{Codigo_matricula: "Barquito1", Nombre_Propietario: "Cristobal Colon"},CapacidadMax:'varios españoles',
    VelocidadMax:'15 km/h'}
)

console.log("El titanic")
Titanic.Encender()
Titanic.MostrarCaracteristicas()
Titanic.LevarAnclas()
Titanic.SubirVelocidad()

console.log("La SantaMaria")
LaSantaMaria.ElevarVelas()
LaSantaMaria.MostrarCaracteristicas()
LaSantaMaria.LevarAnclas()
LaSantaMaria.SubirVelocidad()