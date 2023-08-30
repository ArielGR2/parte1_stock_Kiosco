import { CondicionVenta } from "./condicionVenta";
import { producto } from "./producto";
import { stockdelLocal } from "./stockdelLocal";
import { Comercio } from "./Comercio";
import { ventasRealizadas } from "./ventasRealizadas";

/*
console.log("Debe ingresar todos los datos del producto: ")
let id: number = rls.question("Ingrese Id del producto: ");
let descripcion: String = rls.question("Ingrese la descripción del producto: ");
let precio: number = rls.question("Ingrese precio del producto: ");
let stock: number = rls.question("Ingrese el stock existente del producto: ");
*/


//let listado1 : producto[];

//let gestorStock1 = new stockdelLocal();


let kiosco1 = new Comercio("Kiosco Tito", 2023456464)
console.log("Creamos producto 1 ----------------");
let producto1 = kiosco1.crearProducto();
console.log("Creamos producto 2 ----------------");
let producto2 = kiosco1.crearProducto();
//let producto3 = kiosco1.crearProducto();
console.log("Agregamos a stock producto 1 ----------------");
kiosco1.agregarStock(producto1);
console.log("Agregamos a stock producto 2 ----------------");
kiosco1.agregarStock(producto2);
console.log("El stock será el siguiente: ")
kiosco1.mostrarStock();
/*
//kiosco1.agregarStock(producto3);
console.log("Modificamos producto 1 ----------------")
kiosco1.modificarProducto(producto1);
console.log("Buscamos precio de prod 1: ---------------------");
kiosco1.buscarPrecio(producto1);
console.log("Vendemos 1 de producto 1: ---------------------");*/
kiosco1.venderProducto(1,producto1);
kiosco1.mostrarStock();
/*
console.log("Mostramos todo el Stock   ---------------------");
kiosco1.mostrarStock();
console.log("Eliminamos producto 1 ---------------------");
kiosco1.eliminarProducto(producto1);        (VERIFICAR ESTA LINEA!!!!!!!!!!)
console.log("Mostramos ventas:  ---------------------");
kiosco1.seVendio();
console.log("Mostramos todo el Stock---------------------");
kiosco1.mostrarStock();      */


//listado1 = [producto1,producto2];
//kiosco1.buscarPrecio(producto1);





