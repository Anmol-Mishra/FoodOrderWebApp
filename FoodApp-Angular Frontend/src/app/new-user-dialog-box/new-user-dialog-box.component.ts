import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material'

@Component({
  selector: 'app-new-user-dialog-box',
  templateUrl: './new-user-dialog-box.component.html',
  styleUrls: ['./new-user-dialog-box.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NewUserDialogBoxComponent implements OnInit {

  constructor(private userService : UserServiceService,
              private router : Router) { }

  ngOnInit() {
  }

  
  username:string;
  phoneNumber:string;
  onSubmit():void{
    var user = {
      username : this.username,
      phonenumber : this.phoneNumber
    };
    
    this.userService.saveUserInDatabase(user).subscribe(
      data=>{console.log(data.username);this.router.navigate(['/orderpage', data.username]);},
      error=>{console.error(error); this.router.navigate(['errorpage']);}
    )
  }
}
