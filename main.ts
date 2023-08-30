import { Comercio } from "./Comercio";

let kiosco1 = new Comercio("Kiosco Tito", 2023456464)
console.log("Creamos producto 1: ----------------");
let producto1 = kiosco1.crearProducto();
console.log("-               -");
console.log("Creamos producto 2: ----------------");
let producto2 = kiosco1.crearProducto();
console.log("-               -");
console.log("Creamos producto 3: ----------------");
let producto3 = kiosco1.crearProducto();
console.log("-               -");
console.log("Agregamos a stock producto 1, 2 y 3 ----------------");
kiosco1.agregarStock(producto1);
kiosco1.agregarStock(producto2);
kiosco1.agregarStock(producto3);
console.log("-               -");

kiosco1.mostrarStock();
console.log("-               -");
console.log("Se venderán 5 unidades del producto1, y se mostrará stock actualizado: ")
kiosco1.venderProducto(5, producto1);
kiosco1.mostrarStock();
console.log("-               -");

console.log("Se elimina producto2 y se muestra stock actualizado:  ---------------------");
kiosco1.eliminarProducto(producto2);
kiosco1.mostrarStock();
console.log("-               -");

console.log("Mostramos ventas y modalidad de pago:  ---------------------");
kiosco1.seVendio();
kiosco1.ventaContado();

console.log("******** Fin de ejecución ********");






