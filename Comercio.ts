import { CondicionVenta } from "./condicionVenta";
import { producto } from "./producto";
import { stockdelLocal } from "./stockdelLocal";
import { ventasRealizadas } from "./ventasRealizadas";
import * as rls from "readline-sync";

export class Comercio extends stockdelLocal implements CondicionVenta {
    private nombre: String;
    private cuit: number;
    //private stock: producto[];
    private itemsVendidos: ventasRealizadas[];

    constructor(nombre: String, cuit: number) {
        super();
        this.nombre = nombre;
        this.cuit = cuit;
        this.itemsVendidos = [];
        //this.stock = [];

    }
    public ventaContado(): void {
        console.log("Tendrá un descuento")
    }
    public ventaTarjeta(): void {
        console.log("Tendrá un recargo")
    }



    public venderProducto(cant: number, aux: producto): void {
        let vectAux = this.getProductos();
        console.log(vectAux);
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

    /*
    seVendio();
    kiosco1.verStock();
    */
}