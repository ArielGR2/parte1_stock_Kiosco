"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockdelLocal = void 0;
var rls = require("readline-sync");
var stockdelLocal = /** @class */ (function () {
    function stockdelLocal(productos) {
        if (productos != null) {
            this.productos = productos;
        }
    }
    stockdelLocal.prototype.getProductos = function () {
        return this.productos;
    };
    stockdelLocal.prototype.setProductos = function (productos) {
        this.productos = productos;
    };
    stockdelLocal.prototype.agregarStock = function (producto) {
        this.productos.push(producto);
    };
    stockdelLocal.prototype.buscarStock = function (producto) {
        this.productos.forEach(function (producto) {
            console.log("El stock de este producto es: ", producto.getStock());
        });
    };
    stockdelLocal.prototype.buscarPrecio = function (producto) {
        this.productos.forEach(function (producto) {
            console.log("El precio de este producto es: ", producto.getPrecio());
        });
    };
    stockdelLocal.prototype.modificarProducto = function (producto) {
        console.log("Debe ingresar todos los datos del producto: ");
        var id = rls.question("Ingrese Id del producto: ");
        var descripcion = rls.question("Ingrese la descripción del producto: ");
        var precio = rls.question("Ingrese precio del producto: ");
        var stock = rls.question("Ingrese el stock existente del producto: ");
        this.productos.forEach(function (producto) {
            producto.setIdProducto(id);
            producto.setIdDescripcion(descripcion);
            producto.setPrecio(precio);
            producto.setStock(stock);
        });
        console.log("El producto que se ingresó es: ", producto.getIdproducto(), producto.getIdDescripcion(), producto.getPrecio(), producto.getStock());
    };
    stockdelLocal.prototype.eliminarProducto = function (producto) {
        for (var i = 0; i < this.productos.length; i++) {
            if (this.productos[i].getIdproducto() == producto.getIdproducto()) {
                this.productos.splice(i, 1);
                break;
            }
        }
    };
    return stockdelLocal;
}());
exports.stockdelLocal = stockdelLocal;
