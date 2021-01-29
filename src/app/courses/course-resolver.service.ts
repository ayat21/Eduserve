import { CourseService } from './course.service';
import { Course, CourseResolved } from './course';
import { ActivatedRoute,ActivatedRouteSnapshot,Resolve,RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, observable, of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

@Injectable({
providedIn:'root'
})

export class CourseResolver implements Resolve<CourseResolved>{

  constructor(private courseService :CourseService){}
  resolve(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot):Observable<CourseResolved> {
    const id=+route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `course id was not a number: ${id}`;
      console.error(message);
      return of({ course: null, error: message });
    }

    return this.courseService.getCourse(+id)
      .pipe(
        map(course => ({ course })),
        catchError(error => {
          const message = `Retrieval error: ${error}`;
          console.error(message);
          return of({ course: null, error: message });
        })
      );
  }

}
