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


let listado1 : producto[];




//let gestorStock1 = new stockdelLocal(listado1)

let kiosco1 = new Comercio("Kiosco Tito", 2023456464)

let producto1 = kiosco1.crearProducto();
let producto2 = kiosco1.crearProducto();

//listado1 = [producto1,producto2];

kiosco1.agregarStock(producto1);
kiosco1.agregarStock(producto2);

kiosco1.buscarPrecio(producto1);





