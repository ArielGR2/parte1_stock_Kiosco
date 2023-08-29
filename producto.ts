

export class producto {
    private idProducto : number;
    private idDescripcion : String;
    private precio : number;
    private stock : number;
    

    constructor(idProducto : number, idDescripcion: String, precio:number, stock:number ) {
        this.idProducto = idProducto;
        this.idDescripcion = idDescripcion;
        this.precio = precio;
        this.stock = stock;
    }
    
    public getIdproducto(): number{
        return this.idProducto;
    }
    public setIdProducto(idProducto:number):void{
        this.idProducto = idProducto;
    }
    public getIdDescripcion(): String{
        return this.idDescripcion;
    }
    public setIdDescripcion(idDescripcion:String):void{
        this.idDescripcion = idDescripcion;
    }   
    public getPrecio(): number{
        return this.precio;
    }
    public setPrecio(precio:number):void{
        this.precio = precio;
    } 
    public getStock(): number{
        return this.stock;
    }
    public setStock(stock:number):void{
        this.stock = stock;
    } 
    

}