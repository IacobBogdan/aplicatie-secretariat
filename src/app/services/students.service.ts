import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Student} from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getStudents(idGrup): Observable<any>{
    new HttpHeaders().set('access-control-allow-origin',environment.apiUrl+'/studenti?idgrup='+ idGrup);
    return this.http.get<any>(environment.apiUrl + '/studenti?idgrup='+ idGrup);
  }
  // localhost:8080/studenti/detalii
  getStudentDetails(id): Observable<any>{
    // const body = { title: 'Angular POST Request Example' };
    // this.http.
    return this.http.get<any>(environment.apiUrl + '/studenti/detalii?idStudent='+id);
  }

  getStudentNume(nume):Observable<any>{
    return this.http.get<any>(environment.apiUrl + '/studenti?nume='+nume);
  }
  // getStudentDetails(id): Observable<any> {
  //   new HttpHeaders().set('access-control-allow-origin',environment.apiUrl+'/studenti/detalii');
  //   return this.http.get<any>(environment.apiUrl + '/studenti/detalii',id){

  //   };
  // }
    // observe?: 'body' | 'events' | 'response',
  // tslint:disable-next-line:typedef
  getDetaliiFacultate(idFac) {
    return this.http.get(environment.apiUrl + '/subgrupuri?idGrup=' + idFac);
  
  }
}
