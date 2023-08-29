import { producto } from "./producto";

export class ventasRealizadas {
    private cantidad : number;
    private productoVendido: producto;

    constructor(cantidad:number,productoVendido:producto){
        this.cantidad=cantidad;
        this.productoVendido=productoVendido;
    }

    public getCantidad():number{
        return this.cantidad;

    }

    public getProductoVendido():producto{
        return this.productoVendido;

    }


}