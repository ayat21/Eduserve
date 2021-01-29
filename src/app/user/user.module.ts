import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: UserComponent }
    ])
  ],
  declarations: [
    UserComponent 
  ]
})
export class UserModule { }
