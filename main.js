"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comercio_1 = require("./Comercio");
/*
console.log("Debe ingresar todos los datos del producto: ")
let id: number = rls.question("Ingrese Id del producto: ");
let descripcion: String = rls.question("Ingrese la descripción del producto: ");
let precio: number = rls.question("Ingrese precio del producto: ");
let stock: number = rls.question("Ingrese el stock existente del producto: ");
*/
var listado1;
//let gestorStock1 = new stockdelLocal(listado1)
var kiosco1 = new Comercio_1.Comercio("Kiosco Tito", 2023456464);
var producto1 = kiosco1.crearProducto();
var producto2 = kiosco1.crearProducto();
listado1 = [producto1, producto2];
