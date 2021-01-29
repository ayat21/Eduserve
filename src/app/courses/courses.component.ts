import { Component, OnInit } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute } from '@angular/router';
import { MessageService } from '../messages/message.service';
import { AuthService } from '../user/auth.service';

import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  pageTitle = 'Course List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  loading=true;
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this.listFilter ? this.performFilter(this.listFilter) : this.courses;
  }

  filteredCourses: Course[] = [];
  courses: Course[] = [];
  constructor(private coursetService: CourseService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });


  }


              get isMessageDisplayed(): boolean {
                return this.messageService.isDisplayed;
              }





  ngOnInit(): void {
    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';

    this.coursetService.getCourses().subscribe({
      next: courses => {
        this.courses = courses;
        this.filteredCourses = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
  }

  displayMessages(): void {

    this.router.navigate([{ outlets: { popup: ['messages'] } }]); // Works
    this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course: Course) =>

      course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
       console.log( this.courses)
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }
}

