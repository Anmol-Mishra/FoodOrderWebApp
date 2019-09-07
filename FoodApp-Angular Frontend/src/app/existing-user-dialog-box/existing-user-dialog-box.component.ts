import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-existing-user-dialog-box',
  templateUrl: './existing-user-dialog-box.component.html',
  styleUrls: ['./existing-user-dialog-box.component.css']
})
export class ExistingUserDialogBoxComponent implements OnInit {

   phoneNumber:string;
   constructor(private userService : UserServiceService,
               private router : Router) { }

  ngOnInit() {
  }
showErrorBool = false;
  onSubmit():void{
    
    this.userService.checkIfUserRegistered(this.phoneNumber)
    .subscribe(
    data=>{console.log(data.username),this.router.navigate(['orderpage', data.username])/*route to ordersPage*/},
      error=>{console.error("nahi kam kia"), this.showErrorBool = true/*route to error page*/}
    );
    // this.router.navigate(['errorpage']
  }

}
