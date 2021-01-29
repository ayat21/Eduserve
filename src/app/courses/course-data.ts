import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Course } from './course';

export class CourseData implements InMemoryDbService {

  createDb(): { courses: Course[]} {
    const courses: Course[] = [
      {
        id: 1,
        courseName:  'Leaf Rake',
        courseCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: '../../assets/teacher-image.png',
        category: 'Garden'
      },
      {
        id: 2,
        courseName:  'aeaf Rake',
        courseCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: '../../assets/teacher-image.png',
        category: 'Garden'
      },
      {
        id: 3,
        courseName:  'beaf Rake',
        courseCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: '../../assets/teacher-image.png',
        category: 'Garden'
      },
      {
        id: 4,
        courseName:  'deeaf Rake',
        courseCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: '../../assets/teacher-image.png',
        category: 'Garden'
      },
      {
        id: 5,
        courseName:  'deaf Rake',
        courseCode: 'GDN-0011',
        releaseDate: 'March 19, 2018',
        description: 'Leaf rake with 48-inch wooden handle',
        price: 19.95,
        starRating: 3.2,
        imageUrl: '../../assets/teacher-image.png',
        category: 'Garden'
      }
    ];
    return { courses };
  }
}
