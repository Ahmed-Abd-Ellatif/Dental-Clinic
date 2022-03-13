import { NgToastService } from 'ng-angular-popup';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyPatient } from 'src/app/model/myPatient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
    console.log(this.patientModelObj)
  }



}
