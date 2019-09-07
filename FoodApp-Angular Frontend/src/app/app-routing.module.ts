import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SuccessComponent } from './success/success.component';



const routes: Routes = [
  {path : 'orderpage/:name' , component: OrderPageComponent},
  {path:'welcome', component:WelcomeComponent},
  {path : 'errorpage', component: ErrorPageComponent},
  {path:'success', component : SuccessComponent},
  {path : '' ,redirectTo: 'welcome' ,pathMatch:'full'},
  {path: '**', redirectTo: 'welcome', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
