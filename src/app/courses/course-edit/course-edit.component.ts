import { MessageService } from './../../messages/message.service';
import { Course,CourseResolved } from './../course';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  @ViewChild(NgForm) courseForm: NgForm;
  pageTitle = 'Product Edit';
  errorMessage: string;
  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return JSON.stringify(this.originalcourse) !== JSON.stringify(this.currentcourse);
  }

  private currentcourse: Course;
  private originalcourse: Course;

  get course(): Course {
    return this.currentcourse;
  }
  set course(value: Course) {
    this.currentcourse = value;
    // Clone the object to retain a copy
    this.originalcourse = value ? { ...value } : null;
  }
  constructor(private courseService: CourseService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if (this.courseForm) {
        this.courseForm.reset();
      }
      this.course = data['resolvedData'].course;
    });

    this.route.data.subscribe(data => {
      const resolvedData: CourseResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onCourseRetrieved(resolvedData.course);
    });
  }
  onCourseRetrieved(course: Course): void {
    this.course = course;

    if (!this.course) {
      this.pageTitle = 'No course found';
    } else {
      if (this.course.id === 0) {
        this.pageTitle = 'Add course';
      } else {
        this.pageTitle = `Edit course: ${this.course.courseName}`;
      }
    }
  }

  deletecourse(): void {
    if (this.course.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete(`${this.course.courseName} was deleted`);
    } else {
      if (confirm(`Really delete the course: ${this.course.courseName}?`)) {
        this.courseService.deleteCourse(this.course.id).subscribe({
          next: () => this.onSaveComplete(`${this.course.courseName} was deleted`),
          error: err => this.errorMessage = err
        });
      }
    }
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (this.dataIsValid &&
      Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentcourse = null;
    this.originalcourse = null;
  }

  savecourse(): void {
    if (this.isValid()) {
      if (this.course.id === 0) {
        this.courseService.createCourse(this.course).subscribe({
          next: () => this.onSaveComplete(`The new ${this.course.courseName} was saved`),
          error: err => this.errorMessage = err
        });
      } else {
        this.courseService.updateCourse(this.course).subscribe({
          next: () => this.onSaveComplete(`The updated ${this.course.courseName} was saved`),
          error: err => this.errorMessage = err
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();

    // Navigate back to the course list
    this.router.navigate(['/courses']);
  }

  validate(): void {
    // Clear the validation object
    this.dataIsValid = {};

    // 'info' tab
    if (this.course.courseName &&
      this.course.courseName.length >= 3 &&
      this.course.courseCode) {
      this.dataIsValid['info'] = true;
    } else {
      this.dataIsValid['info'] = false;
    }

    // 'tags' tab
    if (this.course.category &&
      this.course.category.length >= 3) {
      this.dataIsValid['tags'] = true;
    } else {
      this.dataIsValid['tags'] = false;
    }
  }
}
