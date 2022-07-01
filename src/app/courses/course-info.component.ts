import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  constructor(
    private activateRouter: ActivatedRoute,
    private service: CourseService
  ) { }

  course!: Course | any;

  ngOnInit(): void {
    this.service
      .retrieveById(Number(this.activateRouter.snapshot.paramMap.get('id')))
      .subscribe({
        next: course => this.course = course,
        error: err => console.log('Error', err)
      });
  }

  save(): void {
    this.service.save(this.course).subscribe({
      next: course => alert('Saved with success'),
      error: err => alert('Error'+ err)
    });
  }
}
