 import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialog, MatDialogConfig } from '@angular/material';

// @Component({
//   selector: 'app-dialog',
//   templateUrl: './dialog.component.html',
//   styleUrls: ['./dialog.component.css']
// })
// export class DialogComponent implements OnInit {

//   constructor(private dialog : MatDialog) { }

//   ngOnInit() {
//   }

  

  
// }



import { MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

    
    description:string;
    title:string = "Machaenge";

    constructor(private router : Router,
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: number) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
      done(): void {
          
        this.router.navigate(['/success']);
        this.dialogRef.close();
      }
    
        ngOnInit() {
          
        
    }
}
