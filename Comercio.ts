import { CondicionVenta } from "./condicionVenta";
import { producto } from "./producto";
import { stockdelLocal } from "./stockdelLocal";
import { ventasRealizadas } from "./ventasRealizadas";
import * as rls from "readline-sync";

export class Comercio extends stockdelLocal implements CondicionVenta {
    private nombre: String;
    private cuit: number;
    private stock: producto[];
    private itemsVendidos : ventasRealizadas[] ;

    constructor(nombre: String, cuit: number ) {
        super();
        this.nombre = nombre;
        this.cuit = cuit;
        this.stock = [];

    }
    public ventaContado(): void {
        console.log("Tendrá un descuento")
    }
    public ventaTarjeta(): void {
        console.log("Tendrá un recargo")
    }

    public crearProducto(): producto {
        console.log("Debe ingresar todos los datos del producto: ")
        let id: number = rls.question("Ingrese Id del producto: ");
        let descripcion: String = rls.question("Ingrese la descripción del producto: ");
        let precio: number = rls.question("Ingrese precio del producto: ");
        let stock: number = rls.question("Ingrese el stock existente del producto: ");

        let producto1 = new producto(id, descripcion,precio,stock);

        console.log("El producto que se ingresó es: ", producto1.getIdproducto(), producto1.getIdDescripcion(), producto1.getPrecio(), producto1.getStock());

        return producto1;

    }    

    public venderProducto(cant:number,aux:producto): void {
        for (let i: number = 0; i < this.stock.length; i++) {
            if (this.stock[i].getIdproducto() == aux.getIdproducto()) {
                this.stock[i].setStock(this.stock[i].getStock() - cant);
                break;
            }
        }
        let utemVendidos1 = new ventasRealizadas(cant,aux);
        this.itemsVendidos.push(utemVendidos1);  

    }

    public seVendio():void{
        console.log("Se ha vendido los siguientes productos: ");
        this.itemsVendidos.forEach(aux => {
            console.log("Cantidad: ", aux.getCantidad(), "Descripción: ", aux.getProductoVendido() )
        });

    }

    /*
    seVendio();
    kiosco1.verStock();
    */
}