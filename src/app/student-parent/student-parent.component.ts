import {Component, OnInit, Input, OnChanges, SimpleChanges, IterableDiffers, DoCheck} from '@angular/core';
import {SearchArray, Student} from '../student';
import {StudentsService} from '../services/students.service';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ExportService } from '../services/export.service';

@Component({
  selector: 'app-student-parent',
  templateUrl: './student-parent.component.html',
  styleUrls: ['./student-parent.component.css']

})
export class StudentParentComponent implements OnInit, DoCheck {
  views = 'grid';
  // Students = Students;
  iterableDiffer;
  @Input() searchArray: SearchArray;
  idGrup;
  Students : Array<Student> = [];
  p: number = 1;
  nume;


  retrieveStudent(){
    this.studentsService.getStudentNume(this.nume).subscribe((students: any[]) => {
      // console.log(students);
      this.Students = students;
    });
  }
  exportAsXLSX() {
    this.excelService.exportAsExcelFile(this.Students, 'export');
    console.log('A');
 }
  constructor(private studentsService: StudentsService, private iterableDiffers: IterableDiffers, private excelService: ExportService) {
    this.iterableDiffer = iterableDiffers.find([]).create(null);
  }
 
  // Students = [];
  ngOnInit(): void {
    // console.log('searchArray in copil: ', this.searchArray);
    // this.studentsService.getAllStudents().subscribe((students: any[]) => {
    //   console.log(students);
    // });
    // collection: any[] = this.Students;
   

  }
  ngDoCheck() {
    const changes = this.iterableDiffer.diff(this.searchArray);
    if (changes) {
      // console.log('Changes detected!');
      // console.log(this.searchArray);
      // console.log(changes.collection.length);

      // console.log(this.searchArray[changes.collection.length-1].id);
      this.idGrup =this.searchArray[changes.collection.length-1].id;
      // const last = this.searchArray[this.searchArray.length-1];
      // console.log(last);
      // console.log(this.searchArray[this.searchArray[length]-1].id);

      this.studentsService.getStudents(this.idGrup).subscribe((students: any[]) => {
          // console.log(students);
          this.Students = students;
        });
    }
  }
//   ngOnChanges(){
//   const changes = this.iterableDiffer.diff(this.searchArray);
//   if (changes) {
//     // console.log('Changes detected!');
//     // console.log(this.searchArray);
//     // console.log(changes.collection.length);

//     // console.log(this.searchArray[changes.collection.length-1].id);
//     this.idGrup =this.searchArray[changes.collection.length-1].id;
//     // const last = this.searchArray[this.searchArray.length-1];
//     // console.log(last);
//     // console.log(this.searchArray[this.searchArray[length]-1].id);

//     this.studentsService.getStudents(this.idGrup).subscribe((students: any[]) => {
//         // console.log(students);
//         this.Students = students;
//       });
//   }
// }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('value changed in  copil', this.searchArray);
  // }
}
