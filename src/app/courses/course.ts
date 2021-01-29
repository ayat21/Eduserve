/* Defines the course entity */
export interface Course {
  id: number;
  courseName: string;
  courseCode: string;
  category: string;
  tags?: string[];
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

export interface CourseResolved {
  course: Course;
  error?: any;
}
