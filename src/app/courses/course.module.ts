import { CourseEditGuard } from './course-edit/course-edit.guard';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule } from '@angular/forms';
import { CourseResolver } from './course-resolver.service';
import { HeaderModule } from './../header/header.module';
import { CoursesComponent } from './courses.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import {StarModule} from '../star/star.module';
import { AuthGuard } from '../user/auth.guard';



@NgModule({

  imports: [
    FormsModule,
  StarModule,
      CommonModule ,
      RouterModule,
    RouterModule.forChild([
      {path:'courses',
      canActivate: [AuthGuard],
      children:[
      {
        path: '',
       component: CoursesComponent,

       },
      {
        path: ':id',
        component: CourseDetailComponent,
       canActivate: [AuthGuard],
        resolve: { resolvedData: CourseResolver }
      },
      {
        path: ':id/edit',component: CourseEditComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CourseEditGuard],

        resolve: { resolvedData: CourseResolver }
      }
    ]}


    ])
  ],
  declarations: [

    CoursesComponent,
    CourseEditComponent,
     CourseListComponent,
      CourseDetailComponent
    ]
})

export class  CousrseModule { }
