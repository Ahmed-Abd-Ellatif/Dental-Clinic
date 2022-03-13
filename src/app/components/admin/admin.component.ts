import { MyPatient } from './../../model/myPatient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { FormBuilder, Validators } from '@angular/forms';
import {NgToastService} from "ng-angular-popup";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  patients:any=[];
  patientModelObj:MyPatient= new MyPatient();

  // ============================================
  formData=this.fb.group({
    name:['',[Validators.required]],
    age:['',[Validators.required]],
    id:['',[Validators.required , Validators.pattern]],
    city:['',[Validators.required]],
    date:['',[Validators.required]],
    status:['',[Validators.required]],
  })
  get name(){
    return this.formData.get('name')
  }
  get age(){
    return this.formData.get('age')
  }
  get id(){
    return this.formData.get('id')
  }
  get city(){
    return this.formData.get('city')
  }
  get date(){
    return this.formData.get('date')
  }
  get status(){
    return this.formData.get('status')
  }

  // ============================================
  constructor(private patientService:PatientService,
    private toast:NgToastService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.getAllPatient()
  }
  getAllPatient(){
    this.patientService.getAllPatient().subscribe(res=>{this.patients = res})
  }






  addPatient(){
    this.patientModelObj.name=this.formData.value.name;
    this.patientModelObj.age=this.formData.value.age;
    this.patientModelObj.id=this.formData.value.id;
    this.patientModelObj.city=this.formData.value.city;
    this.patientModelObj.date=this.formData.value.date;
    this.patientModelObj.status=this.formData.value.status;
    this.patientService.createPatient(this.patientModelObj).subscribe();
    alert('Added Seccess')
    this.toast.success({detail:'SUCCESS',summary:'Added Patient',duration:2000})
    this.getAllPatient();
    // console.log(this.patientModelObj)
  }

 // delete
 deletePatient(id:any){
   this.patientService.deletePatient(id).subscribe();
   alert("Delete compleated")
   this.toast.error({detail:'DELETE',summary:'Deleted Patient',duration:2000})
   this.getAllPatient()
 }
}
