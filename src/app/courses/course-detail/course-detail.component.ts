import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course, CourseResolved } from '../course';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  course: Course;
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: CourseResolved =
      this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.oncourseRetrieved(resolvedData.course);
  }

  oncourseRetrieved(course: Course): void {
    this.course = course;

    if (this.course) {
      this.pageTitle = `course Detail: ${this.course.courseName}`;
    } else {
      this.pageTitle = 'No course found';
    }
  }
}
