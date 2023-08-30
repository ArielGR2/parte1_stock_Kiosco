import { CondicionVenta } from "./CondicionVenta";
import { producto } from "./Producto";
import { stockdelLocal } from "./StockdelLocal";
import { ventasRealizadas } from "./VentasRealizadas";

export class Comercio extends stockdelLocal implements CondicionVenta {
    private nombre: String;
    private cuit: number;
    private itemsVendidos: ventasRealizadas[];

    constructor(nombre: String, cuit: number) {
        super();
        this.nombre = nombre;
        this.cuit = cuit;
        this.itemsVendidos = [];
    }

    public ventaContado(): void {
        console.log("Tendrá un descuento por pago CONTADO")
    }

    public ventaTarjeta(): void {
        console.log("Tendrá un recargo por pago con TARJETA")
    }

    public venderProducto(cant: number, aux: producto): void {
        let vectAux = this.getProductos();
        for (let i: number = 0; i < vectAux.length; i++) {
            if (vectAux[i].getIdproducto() == aux.getIdproducto()) {
                vectAux[i].setStock(vectAux[i].getStock() - cant);
            }
        }
        let itemVendidos1 = new ventasRealizadas(cant, aux);
        this.itemsVendidos.push(itemVendidos1);
    }

    public seVendio(): void {
        console.log("Se ha vendido los siguientes productos: ");
        this.itemsVendidos.forEach(aux => {
            console.log("Cantidad: ", aux.getCantidad(), "Descripción: ", aux.getProductoVendido())
        });
    }
}