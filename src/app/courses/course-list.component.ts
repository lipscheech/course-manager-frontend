import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(
    private service: CourseService
  ) { }

  filteredCourses: Course[] = [];
  _courses: Course[] = [];
  _filterBy!: string;

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.service
      .retrieveAll()
      .subscribe({
        next: courses => {
          this._courses = courses;
          this.filteredCourses = this._courses;
        },
        error: err => console.log('Error', err)
      });
  }

  deleteById(courseId: number): void {
    this.service.deleteById(courseId).subscribe({
      next: () => {
        alert('Deleted with success');
        this.retrieveAll();
      },
      error: err => alert('Error'+err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }

}
