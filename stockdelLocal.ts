import { producto } from "./Producto";
import * as rls from "readline-sync";

export class stockdelLocal {

    protected productos: producto[];

    constructor() {
        this.productos = []
    }

    public getProductos(): producto[] {
        return this.productos;
    }

    public setProductos(productos: producto[]): void {
        this.productos = productos;
    }

    public crearProducto(): producto {

        console.log("Debe ingresar todos los datos del producto: ")
        let id: number = rls.question("Ingrese Id del producto: ");
        let descripcion: String = rls.question("Ingrese la descripción del producto: ");
        let precio: number = rls.question("Ingrese precio del producto: ");
        let stock: number = rls.question("Ingrese el stock existente del producto: ");
        let producto1 = new producto(id, descripcion, precio, stock);
        console.log("El producto que se ingresó es: ", producto1.getIdproducto(), producto1.getIdDescripcion(), producto1.getPrecio(), producto1.getStock());

        return producto1;
    }

    public agregarStock(producto: producto): void {
        this.productos.push(producto);
    }

    public buscarStock(producto: producto): void {
        this.productos.forEach(producto => {
            console.log("El stock de este producto es: ", producto.getStock());
        });
    }

    public mostrarStock(): void {
        console.log("El Stock del comercio es el siguiente: ");
        for (let i = 0; i < this.productos.length; i++) {
            console.log("Id: ", this.productos[i].getIdproducto(), "Descripción: ", this.productos[i].getIdDescripcion(), "Precio: ", this.productos[i].getPrecio(), "Stock: ", this.productos[i].getStock())
        }
    }

    public buscarPrecio(producto: producto): void {
        console.log("El precio de este producto es: ", producto.getPrecio());
    }

    public modificarProducto(producto: producto): void {
        console.log("El producto a modificar es: ", producto.getIdproducto(), producto.getIdDescripcion(), producto.getPrecio(), producto.getStock());
        console.log("Debe ingresar los nuevos datos del producto: ");
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
        console.log("El producto modificado es: ", producto.getIdproducto(), producto.getIdDescripcion(), producto.getPrecio(), producto.getStock());
    }

    public eliminarProducto(producto: producto): void {
        for (let i: number = 0; i < this.productos.length; i++) {
            if (this.productos[i].getIdproducto() == producto.getIdproducto()) {
                this.productos.splice(i, 1);
                break;
            }
        }
        console.log("Se eliminó el producto solicitado");
    }
}