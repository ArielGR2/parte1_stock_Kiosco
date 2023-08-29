import { producto } from "./producto";
import * as rls from "readline-sync";

export class stockdelLocal {

    private productos: producto[];

    constructor(productos?: producto[]) {
        
        if(productos != null ) { this.productos = productos;}

    }
    public getProductos(): producto[] {
        return this.productos;
    }

    public setProductos(productos: producto[]): void {
        this.productos = productos;
    }

    public agregarStock(producto: producto): void {
        this.productos.push(producto);
    }
    public buscarStock(producto: producto): void {
        this.productos.forEach(producto => {
            console.log("El stock de este producto es: ", producto.getStock());
        });
    }
    public buscarPrecio(producto: producto): void {
        this.productos.forEach(producto => {
            console.log("El precio de este producto es: ", producto.getPrecio());
        });
    }
    public modificarProducto(producto: producto): void {
        console.log("Debe ingresar todos los datos del producto: ")
        let id: number = rls.question("Ingrese Id del producto: ");
        let descripcion: String = rls.question("Ingrese la descripción del producto: ");
        let precio: number = rls.question("Ingrese precio del producto: ");
        let stock: number = rls.question("Ingrese el stock existente del producto: ");

        this.productos.forEach(producto => {
            producto.setIdProducto(id);
            producto.setIdDescripcion(descripcion);
            producto.setPrecio(precio);
            producto.setStock(stock);

        });
        console.log("El producto que se ingresó es: ", producto.getIdproducto(), producto.getIdDescripcion(), producto.getPrecio(), producto.getStock());

    }

    public eliminarProducto(producto: producto) {

        for (let i: number = 0; i < this.productos.length; i++) {
            if (this.productos[i].getIdproducto() == producto.getIdproducto()) {
                this.productos.splice(i, 1);
                break;
            }
        }
    }

}