export class Item{
    //id : number;
    name : string;
    quantity : number;
    quantityInWareHouse : number;
    costPerPiece : number;
    totalCost:number;
    constructor(name, quantityInWareHouse, costPerPiece){
        this.name = name;
        this.quantity = 0;
        this.quantityInWareHouse = quantityInWareHouse;
        this.costPerPiece = costPerPiece;
        this.totalCost = 0;
    }
}