import { RouterModule } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'popup'
      }
    ])
  ],
  declarations: [
    MessagesComponent
  ]
})
export class MessageModule { }
