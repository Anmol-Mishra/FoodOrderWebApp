import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
// export class WelcomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }


//   newUser:boolean = false;
//   existingUser:boolean = false;

//   newUserDialogBox():void{
//     if(this.newUser === false)
//       this.newUser = true;
//     else
//       this.newUser = false;

//       this.existingUser=false;
//   }

//   existingUserDialogBox():void{
//     if(this.existingUser === false)
//     this.existingUser = true;
//     else
//     this.existingUser = false;
//     this.newUser = false;
//   }

// }





export class WelcomeComponent implements OnDestroy {
  newUser:boolean = false;
  existingUser:boolean = false;

  newUserDialogBox():void{  
    if(this.newUser === false)
      this.newUser = true;
    else
      this.newUser = false;

      this.existingUser=false;
  }

  existingUserDialogBox():void{
    if(this.existingUser === false)
    this.existingUser = true;
    else
    this.existingUser = false;
    this.newUser = false;
  }






  checked = false;
  disabled = false;









  mobileQuery: MediaQueryList;

  alphas = ["New User", "Existing User"];
  fillerNav = this.alphas;//Array.from({length: 2}, );

  fillerContent = Array.from({length: 1}, () =>
      `Welcome to food Ordering App Sir. We promise to fill your stomach with delicacy's and your heart with love`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}