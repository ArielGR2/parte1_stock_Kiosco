"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comercio = void 0;
var producto_1 = require("./producto");
var stockdelLocal_1 = require("./stockdelLocal");
var ventasRealizadas_1 = require("./ventasRealizadas");
var rls = require("readline-sync");
var Comercio = /** @class */ (function (_super) {
    __extends(Comercio, _super);
    function Comercio(nombre, cuit) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.cuit = cuit;
        _this.stock = [];
        return _this;
    }
    Comercio.prototype.ventaContado = function () {
        console.log("Tendrá un descuento");
    };
    Comercio.prototype.ventaTarjeta = function () {
        console.log("Tendrá un recargo");
    };
    Comercio.prototype.crearProducto = function () {
        console.log("Debe ingresar todos los datos del producto: ");
        var id = rls.question("Ingrese Id del producto: ");
        var descripcion = rls.question("Ingrese la descripción del producto: ");
        var precio = rls.question("Ingrese precio del producto: ");
        var stock = rls.question("Ingrese el stock existente del producto: ");
        var producto1 = new producto_1.producto(id, descripcion, precio, stock);
        console.log("El producto que se ingresó es: ", producto1.getIdproducto(), producto1.getIdDescripcion(), producto1.getPrecio(), producto1.getStock());
        return producto1;
    };
    Comercio.prototype.venderProducto = function (cant, aux) {
        for (var i = 0; i < this.stock.length; i++) {
            if (this.stock[i].getIdproducto() == aux.getIdproducto()) {
                this.stock[i].setStock(this.stock[i].getStock() - cant);
                break;
            }
        }
        var utemVendidos1 = new ventasRealizadas_1.ventasRealizadas(cant, aux);
        this.itemsVendidos.push(utemVendidos1);
    };
    Comercio.prototype.seVendio = function () {
        console.log("Se ha vendido los siguientes productos: ");
        this.itemsVendidos.forEach(function (aux) {
            console.log("Cantidad: ", aux.getCantidad(), "Descripción: ", aux.getProductoVendido());
        });
    };
    return Comercio;
}(stockdelLocal_1.stockdelLocal));
exports.Comercio = Comercio;
