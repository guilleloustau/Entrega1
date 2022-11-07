
for (let x = 1; x < 85; x++) {
  console.log("Cuota numero " + x + " " + " de 45830"); 
   
  }
alert ("¿Queres conocer el NUEVO CITROEN C3? ");

  let nombreUs = prompt ("Ingresar su Nombre");

    if(nombreUs == "") {

      alert ("No Ingreso su Nombre");
    } 
  let apellidoUs = prompt ("Ingresar su Apellido");
     if(apellidoUs == "") {
       alert ("No Ingreso su Apellido");
      } else {
          alert ( nombreUs + " " + apellidoUs + " " +", estas mas cerca de conocer tu NUEVO CITROEN C3");
        } 

       alert ("Vas a poder financiarlo hasta en 84 cuotas")

    alert ("El precio del NUEVO CITROEN C3 es de $3.850.000")
    alert ("Solo tenes que entregar el 30% del valor del Nuevo Citroen C3, $1150000" )
 let entrega = 1150000;
let costo = 3850000;

const resta = (costo, entrega) => costo - entrega;
alert ("Te va a quedar un saldo por pagar en pesos de ")
alert(resta  (3850000,1150000));
let saldo = "$2700000"; 
let finan1 = 36;

alert ("Que los podes pagar hasta en 36 cuotas de ")
let resultado = (2700000/36)
alert (resultado) 

function Autos(titulo, versión, precio) {
  this.titulo = titulo;
  this.versión = versión;
  this.precio = precio;
}
const auto1 = new Autos("Nuevo Citroen C3", "Pure Tech Live", 2954000);
const auto2 = new Autos("Nuevo Citroen C3", "Pure Tech Live Pack", 3217800);
const auto3 = new Autos("Nuevo Citroen C3", "Feel", 3594300);
const auto4 = new Autos("Nuevo Citroen C3", "Feel Confort", 3684300);
const auto5 = new Autos("Nuevo Citroen C3", "Feel Firt Edition", 3754000);
const auto6 = new Autos("Nuevo Citroen C3", "Feel VTI 115", 3836000);
console.log(auto4);


const AutoCitroen = [
  {Auto: 'Nuevo C3 Live', precio: 2954000},
  {Auto: 'Nuevo C3 Live Pack', precio: 3217800},
  {Auto: 'Nuevo C3 Feel', precio: 3594300},
  {Auto: 'Nuevo C3 Feel Confort', precio: 3684300},
  {Auto: 'Nuevo C3 Feel Firt Edition', precio: 3754000},
  {Auto: 'Nuevo C3 Feel VTI 115', precio: 3836000},
];
const mayorPrecio = AutoCitroen.filter(p => p.precio >= 3500000)
console.log(mayorPrecio);



const productos = ["Nuevo C3 Live", "Nuevo C3 Live Pack", "Nuevo C3 Feel", "Nuevo C3 Feel Pack", "Nuevo C3 Feel Pack Automantico", "Nuevo C3 Feel Pack Automatico Bitono"];
console.log(productos);


for (let i = 0; i <6; i++) {
     console.log(productos[i])

  }
  productos.push("Nuevo C3 Automatico Firt Edition") 
  console.log(productos)

  console.log(productos.join(" , "),)

 console.log(productos.includes("Nuevo C3 Live"));
 if (productos.includes("Nuevo C3 Live Pack")) {
     console.log(productos.indexOf("Nuevo C3 Live Pack"));
 } else 
 console.log("se encuentra en el Array");




 

   