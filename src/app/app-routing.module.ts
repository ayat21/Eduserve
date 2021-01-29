import { SelectiveStrategy } from './selective-strategy.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './user/auth.guard';
 0

@NgModule({
  imports: [RouterModule.forRoot(
    [

      {
        path: 'home',
        component: HomeComponent
       },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }

    ],{ enableTracing: true, preloadingStrategy: SelectiveStrategy }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
