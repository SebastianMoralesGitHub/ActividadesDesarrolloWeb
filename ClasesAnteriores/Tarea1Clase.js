let num = 777; // declaracion con let
const mensaje = 'Sintaxis básica'; //declaracion con const
console.log(mensaje.length); //uso de un metodo incorporado
console.log(`El numero es: ${num}  y el mensaje es: ${mensaje}`); //concatenacion
let bandera = false; //variable booleana
console.log(Math.floor(Math.random()*100)); //uso de dos metodos, para recibir un numero aleatorio hasta el 100
num=Math.floor(Math.random()*1000); //cambio del valor de la variable

if(num%2===0) //Uso del if y del else if y unos cuantos operadores aritmeticos
{
    console.log(`Este numero es par: ${num}`);
    num+=500;
    console.log(`Se le ha sumado 500 al numero anterior: ${num}`);
} else if (num%2!==0)
{
    console.log(`Este numero NO es par: ${num}`);
    num*=500;
    console.log(`Se le ha multiplicado por 500 al numero anterior: ${num}`);
}

const ocupacion = 'estudiante'; //Uso del switch
switch (ocupacion) { 
  case 'profesor':
    console.log('Bienvenido profesor :)');
    break;
  case 'Aseador':
    console.log('Bienvenido de nuevo, aseador');
    break;
    case 'estudiante':
    console.log('Bienvenido alumno');
    break;
  default:
    console.log('azúcar');
}

num2=Math.floor(Math.random()*11);

if(num2===10 || num2===5) //uso del or
{
    console.log(`Este numero es 5 o 10: ${num2}`);
}

if(num2<=5 && num2%2===0)
{
    console.log(`Este numero es menor de 5 y es par: ${num2}`);
} else
{
    console.log(`Este numero no cumple con ser menor de 5 y ser par a la vez: ${num2}`) //uso del &&
}


