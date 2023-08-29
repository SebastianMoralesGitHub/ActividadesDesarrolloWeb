/*Construir array con mínimo 2 objetos, 
cada objeto debe tener otro objeto adentro, 
usar mínimo 3 métodos de arreglos sobre el array */

/*Array con 3 objetos, cada objeto con otro objeto adentro (registro) */
const Cervezas_Inventario = [
    {marca:'Aguila', tipo:'Light', porcentaje_alcohol:'3.39%',
    empresa_distribuidora:'Bavaria',origen:'Barranquilla',Registro:{fecha_ingreso:'21/08/2023'
    ,cantidad_ingresada:'10 cajas',cantidad_unidades:300,recibido_por:'Laura'}},
    {marca:'Pilsen', tipo:'Original', porcentaje_alcohol:'4.1%',
    empresa_distribuidora:'Bavaria',origen:'Medellín',Registro:{fecha_ingreso:'18/08/2023'
    ,cantidad_ingresada:'5 cajas',cantidad_unidades:150,recibido_por:'Yuli'}},
    {marca:'Heineken', tipo:'Lata', porcentaje_alcohol:'4%',
    empresa_distribuidora:'Distribuidora Nordica',origen:'Copacabana',
    Registro:{fecha_ingreso:'20/08/2023'
    ,cantidad_ingresada:'10 sixpacks',cantidad_unidades:60,recibido_por:'Laura'}}
];
/*Primer metodo de arreglo (every)*/

const Cumplen_con = Cervezas_Inventario.every((c) => c.Registro.cantidad_unidades>50);

if(Cumplen_con==true)
    console.log(`Todas las marcas de cerveza cuentan con más de 50 unidades`);

/*Segundo metodo de arreglo (filter) */

const filtrar_persona_recibe = Cervezas_Inventario.filter((p) => 
p.Registro.recibido_por == 'Laura');

console.log(`Los siguientes registros fueron recibidos por
Laura:`);
console.log(filtrar_persona_recibe);

/* Tercer metodo de arreglo (map) */

const Sumar_10_unidades = Cervezas_Inventario.map((c) => 
c.Registro.cantidad_unidades+=10);

console.log(Sumar_10_unidades);




