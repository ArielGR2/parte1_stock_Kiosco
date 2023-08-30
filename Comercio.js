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
var stockdelLocal_1 = require("./stockdelLocal");
var ventasRealizadas_1 = require("./ventasRealizadas");
var Comercio = /** @class */ (function (_super) {
    __extends(Comercio, _super);
    function Comercio(nombre, cuit) {
        var _this = _super.call(this) || this;
        _this.nombre = nombre;
        _this.cuit = cuit;
        _this.itemsVendidos = [];
        return _this;
        //this.stock = [];
    }
    Comercio.prototype.ventaContado = function () {
        console.log("Tendrá un descuento");
    };
    Comercio.prototype.ventaTarjeta = function () {
        console.log("Tendrá un recargo");
    };
    Comercio.prototype.venderProducto = function (cant, aux) {
        var vectAux = this.getProductos();
        //console.log(vectAux);
        for (var i = 0; i < vectAux.length; i++) {
            if (vectAux[i].getIdproducto() == aux.getIdproducto()) {
                vectAux[i].setStock(vectAux[i].getStock() - cant);
            }
        }
        var itemVendidos1 = new ventasRealizadas_1.ventasRealizadas(cant, aux);
        this.itemsVendidos.push(itemVendidos1);
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
