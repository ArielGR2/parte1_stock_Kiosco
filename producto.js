"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.producto = void 0;
var producto = /** @class */ (function () {
    function producto(idProducto, idDescripcion, precio, stock) {
        this.idProducto = idProducto;
        this.idDescripcion = idDescripcion;
        this.precio = precio;
        this.stock = stock;
    }
    producto.prototype.getIdproducto = function () {
        return this.idProducto;
    };
    producto.prototype.setIdProducto = function (idProducto) {
        this.idProducto = idProducto;
    };
    producto.prototype.getIdDescripcion = function () {
        return this.idDescripcion;
    };
    producto.prototype.setIdDescripcion = function (idDescripcion) {
        this.idDescripcion = idDescripcion;
    };
    producto.prototype.getPrecio = function () {
        return this.precio;
    };
    producto.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    producto.prototype.getStock = function () {
        return this.stock;
    };
    producto.prototype.setStock = function (stock) {
        this.stock = stock;
    };
    return producto;
}());
exports.producto = producto;
