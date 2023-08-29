/* ------ funciones ------- */


function restar(Num1,Num2)
{
     return Num2-Num1;
}

/* ----  funciones anonimas (anonymous functions) */

const SumarDosNumeros = function(Num1,Num2)
{
    return Num1+Num2;
}

/* llamar las funciones */
console.log(`La suma es: ${SumarDosNumeros(50,999)}`);

console.log(`La resta es: ${restar(50,999)}`);

/* Funcion tipo flecha (Arrow Functions) */
/* Recibe parametros */
const Multiplicasao = (num1,num2) =>
{
    return num1*num2;
}

console.log(`La multiplicación es: ${Multiplicasao(50,999)}`);

/* NO recibe parametros */

const multi = () =>
{
    return 1*0;
} 

/* Recibe un parametro */
const MultiplicasaoX10 = n1 => 
{
    return n1*10;
}

/* Ahorrar funcion de la manera más optimizada*/

const MultiAhorraEspacio = (n1,n2) => n1*n2;

/* Funcion que llama a otra funcion xd (callback function) */

const OperasaosMatematicas = (n1,n2,operasasao) =>
{
    return(operasasao(n1,n2));
}
console.log(`${OperasaosMatematicas(5,9,MultiAhorraEspacio)}`);

/* LLamando la funcion de la multiplicacion x 10 */
console.log(`La multiplicacion x 10 de -14 es ${MultiplicasaoX10(-14)}`);

/* ------------- Arreglosss ------------------ */
/* Arreglo casual */
let UserData = ['juan', 12342, '@popeyeelmarinero.com'];
/* Arreglo con objeto */
const UserData2 = [{name:'juan',number:12342,mail:'@popeyito.com'},{name:'sebas',number:311,mail:'@morales.com'}];

/* length = cantidad de datos (longitud)
index = posicion del arreglo
push = Ingresar un dato al final del arreglo
pop = sacar el dato final del arreglo */

console.log(`${UserData2[1].mail}`); /*Muestro la propiedad mail del dato 1 del arreglo objeto*/
console.log(`${UserData2[0].number}`); /*Muestro la propiedad number del dato 0 del arreglo objeto*/

/* Foreach */
UserData2.forEach(variable => {
    console.log(`${variable.name},${variable.number},${variable.mail}\n`);    
});

/* --------------------------------------------------------- */
/* Ejercicios realizados para la Tarea de Seguimiento #2: */

/* Crear dos funciones tipo flecha.
Condiciones: 
Una de ellas debe manipular arreglos (debe hacer pop() o push()).
La segunda debe tomar dos parámetros de entrada y no usar return para regresar el resultado.
Crear una tercera función tipo flecha que sea un callback function.

Mostrar el resultado de la callback function, usando las dos funciones anteriores. */

/* Primera funcion: */
console.log('------------------------------------------------- \n');
console.log('\nAhora comienzan los ejercicios del seguimiento #2: \n');
console.log('\n------------------------------------------------- \n');

console.log('array antes de manipularlo: \n');
UserData.forEach(variable => {
    console.log(`${variable}`);    
});
/* primer ejercicio funcion que manipula el arreglo */
const ManipulacionDeArreglo = () =>
{
    let aux=prompt('Ingrese el nombre: ', 'Name');
    UserData.push(aux);
    console.log('array despues de manipularlo: \n');
UserData.forEach(variable => {
    console.log(`${variable}`);    
});
}
/* segundo ejercicio funcion que recibe dos parametros y no usa return para mostrar el resultado: */
const Potencia = (base,exponente) => Math.pow(base,exponente);

/* Tercera funcion (callback function) llamando a las dos funciones: */

const FuncionCallBack = (base,exponente,funcion1,funcion2) =>
{
    return(ManipulacionDeArreglo(),Potencia(base=prompt('Ingrese una base:'),exponente=prompt('Ingrese un exponente: ')));
}

console.log(FuncionCallBack());

 



