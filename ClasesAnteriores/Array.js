const numeritos = [5,10,15,20,25,30,35];
let replica = 0;

/* Usando foreach */

numeritos.forEach(x => {
    replica+=x;
});
console.log(numeritos);
console.log(replica);

/* map */

const triple = numeritos.map((y)=>(y*3)); 
console.log(triple);

/* Vector de objetos: usando map */

const Estudiantes = [
    {nombre:'Juan',apellido:'Betan'},
    {nombre:'Sebas',apellido:'Morales'},
    {nombre:'Pedrito',apellido:'Pablont'}
]

const NombreCompleto = Estudiantes.map((x)=>{
    return (`El nombre completo es: ${x.nombre} ${x.apellido}`)
})

console.log(NombreCompleto);

/* filter = filtrado con una condicion: */

const FiltrarNumeros = numeritos.filter((num) => num>=30 || num===5);
const ObjetosFiltrar = Estudiantes.filter((student) => student.apellido==='Pablont');

console.log(FiltrarNumeros);
console.log(ObjetosFiltrar);

/* Evalua todas */
const sopas = ['mondongo','frijoles','garban','totuma','instantanea','ajinomen'];

const cumple = sopas.every((s) => s.length<=6);

console.log(cumple);

const ObjetosFrutas = [
    {nombre:'Banano',estado:'buena'},
    {nombre:'Manzana',estado:'buena'},
    {nombre:'Cidra',estado:'buena'},
    {nombre:'Marañol',estado:'buena'}
];

const CumpleFrutas = ObjetosFrutas.every((F) => F.estado==='buena');

console.log(CumpleFrutas);

/* Objeto dentro de un objeto */
const VehiculoNissan = 
{
    color:'Naranja',año:'2000',marca:'Nissan',modelo:'Gtr',
    revisiones:{fechaIngreso:'10/01/2009',fechasalida:'28/01/2009',
    estadofinal:'Excelente',mecanicoautorizado:'Betan'},
    asegurado:true,sancionespendientes:false
}

let Autos=[];

Autos.push(VehiculoNissan);

console.log(Autos);


