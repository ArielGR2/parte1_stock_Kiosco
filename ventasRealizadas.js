"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ventasRealizadas = void 0;
var ventasRealizadas = /** @class */ (function () {
    function ventasRealizadas(cantidad, productoVendido) {
        this.cantidad = cantidad;
        this.productoVendido = productoVendido;
    }
    ventasRealizadas.prototype.getCantidad = function () {
        return this.cantidad;
    };
    ventasRealizadas.prototype.getProductoVendido = function () {
        return this.productoVendido;
    };
    return ventasRealizadas;
}());
exports.ventasRealizadas = ventasRealizadas;
