import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ 
    CommonModule
  ]
  ,
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent,
    CommonModule ,
    FormsModule,
    RouterModule
  ]
})
export class HeaderModule { }
