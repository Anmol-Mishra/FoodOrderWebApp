import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../Item';
import {  MatDialog, MatSnackBar } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { MenuServiceService } from '../menu-service.service';








@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private menuService : MenuServiceService,
              private dialog : MatDialog,
              private routers : Router, private snackBar:MatSnackBar) { }


              color = "accent";
              slider:boolean = false;
             
            
            Slider(){
              if(this.slider === true)
                  {
                    this.totalCost-=10;
                    this.slider = false;
                  }
              else if(this.slider === false)
                {
                  this.totalCost +=10;
                  this.slider = true;
                }
            }
            
            

              






  name:string;
  title:string = "Machaenge";

  showColBool : boolean = false;
  totalCost : number = 0;
  vegItems = new Array<Item>();
  nonVegItems = new Array<Item>();
  displayedColumns: string[] = ['name', 'Cost Per Piece', 'Item Quantity', 'Total Cost of this', 'Add', 'Remove'];
              dataSource = this.vegItems;
  ngOnInit() {
    
    this.name = this.route.snapshot.params['name'];
    

    this.menuService.getVegMenu().subscribe(response =>
      {
        this.vegItems = response.map(item =>
        {
          return new Item(
              
              item.foodname,
              item.quantity,
              item.cost
          );
        });
      });


      


      this.menuService.getNonVegMenu().subscribe(response =>
        {
          this.nonVegItems = response.map(item =>
          {
            return new Item(
                
                item.foodname,
                item.quantity,
                item.cost
            );
          });
        });

  }
  toggleVeg:number = 0;
  boolVeg:boolean=false;
showVegList(){
  

  if(this.boolVeg === true)
  {
    this.boolVeg = false;
  }
  else
  {this.boolVeg = true;this.boolNonVeg = false;}
}

toggleNonVeg:number=0;
boolNonVeg:boolean;
showNonVegList(){
  

  if(this.boolNonVeg === true)
    this.boolNonVeg = false;
  else
    {this.boolNonVeg = true;this.boolVeg=false;}

}

khanaKhatam:string;
khanaKhatamBool:boolean = false;

  add(item:Item):void{
    if(item.quantityInWareHouse-item.quantity>0){
    item.quantity = item.quantity+1;
    item.totalCost = item.costPerPiece*item.quantity;
    this.totalCost = this.totalCost + item.costPerPiece;
    this.showColBool = true;
    }
    else
    {
      this.khanaKhatamBool = true;
      this.khanaKhatam = item.name;
      let snackBarRef = this.snackBar.open(`Sorry ${this.name}, More of ${item.name} is unavailable currenly.`,"Okay", { duration: 3000 }); 
      snackBarRef.onAction().subscribe(()=> (null));
    }
  }

  subtract(item:Item):void{
    if(item.quantity>0)
    {item.quantity = item.quantity-1;
    item.totalCost = item.costPerPiece*item.quantity;
    this.totalCost = this.totalCost - item.costPerPiece;
    this.khanaKhatamBool = false;
  if(item.quantity === 0)
  this.showColBool = false;
  }
  }


  showDialog:boolean = false;

  dialogBool:boolean = false;
  openDialog(){
    //this.dialogBool = true;
    this.showDialog = true;
  }

  alreadyOpen:boolean = false;
//   openDialogBox(){
//     const dialogConfig = new MatDialogConfig();

    
//     dialogConfig.disableClose = true;
//     dialogConfig.autoFocus = true;
//     dialogConfig.hasBackdrop = true;
//     if(!this.alreadyOpen)
//     {this.dialog.open(DialogComponent, dialogConfig);this.alreadyOpen = true;}
  

//     console.log("Is here");
// }
openDialogBox(): void {
  const dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: this.totalCost
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    
  });
}



}
