import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPatient } from '../model/myPatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
private baseUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  // GET ALL PATIENTS
  public getAllPatient():Observable<MyPatient>{
    let dataUrl:string=`${this.baseUrl}/patients`;
    return this.http.get<MyPatient>(dataUrl);
  }
  //GET SINGLE PATIENT
  public getSinglePatient(patientPhone:string):Observable<MyPatient>{
    let dataUrl:string=`${this.baseUrl}/patients/${patientPhone}`
    return this.http.get<MyPatient>(dataUrl);
  }
  // CREATE PATIENT
  public createPatient(patientData:MyPatient):Observable<MyPatient>{
    let dataUrl:string=`${this.baseUrl}/patients`;
    return this.http.post<MyPatient>(dataUrl,patientData);

  }
  // UPDATE PATIENT
  public updatePatient(patientData:MyPatient,patientPhone:string):Observable<MyPatient>{
    let dataUrl:string=`${this.baseUrl}/patients/${patientPhone}`;
    return this.http.put<MyPatient>(dataUrl,patientData);
  }
  // DELETE PATIENT
  public deletePatient(patientPhone:string):Observable<MyPatient>{
    let dataUrl:string=`${this.baseUrl}/patients/${patientPhone}`;
    return this.http.delete<MyPatient>(dataUrl);
  }
}
