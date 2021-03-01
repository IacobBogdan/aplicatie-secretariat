import {Component, Input, OnInit} from '@angular/core';
import { ExportService } from '../services/export.service';
import { StudentsService } from '../services/students.service';
import {Student} from '../student';

@Component({
  selector: 'app-grid-view-student',
  templateUrl: './grid-view-student.component.html',
  styleUrls: ['./grid-view-student.component.css']
})
export class GridViewStudentComponent implements OnInit {
  @Input() student: Student;
  // students: Student;
  constructor(private studentsService: StudentsService, private excelService: ExportService) { }
  ngOnInit(): void {
  }
 
  // tslint:disable-next-line:typedef
  toggleShowDetails(student: Student) {
    student.detalii = !student.detalii;
    this.studentsService.getStudentDetails(student.idPersoana).subscribe((students: Student) => {
      // console.log(students);  
    // student = students;
    console.log(students);

    student.ciclu = students.ciclu;
    student.domeniu = students.domeniu;
    student.program = students.program;
    student.an = students.an;
    student.serie = students.serie;
    student.grupa = students.grupa;
    });
    
  }
   exportAsXLSX() {
    // this.excelService.exportAsExcelFile(students, 'export');
    console.log('A');
 }
}
