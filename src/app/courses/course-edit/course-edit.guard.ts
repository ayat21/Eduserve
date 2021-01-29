import { Course } from './../course';
import { CourseEditComponent } from './course-edit.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseEditGuard implements CanDeactivate<CourseEditComponent> {
  canDeactivate(
    component: CourseEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (component.isDirty) {
        const courseName = component.course.courseName || 'New Course';
        return confirm(`Navigate away and lose all changes to ${courseName}?`);
      }
      return true;
  }

}
