import { NgToastService } from 'ng-angular-popup';
import { MyPatient } from 'src/app/model/myPatient';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientId:any;
  patients:any=[]
  constructor(private activatedRoute:ActivatedRoute,
    private router:Router,
    private patientService:PatientService,
    private toast:NgToastService) { }
  price:number=0;
  paid:boolean=false;
  ngOnInit(): void {

this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
  this.patientId = params.get('phone');
  console.log(this.patientId)

  this.patientService.getSinglePatient(this.patientId).subscribe(res=>{
    this.patients.push(res);
    console.log(this.patients)
  })
})

  }
  // Delete
  deletePatient(id:any){
    this.patientService.deletePatient(id).subscribe();
    alert("Patient Deleted")
    this.toast.error({detail:'DELETE',summary:'Deleted Patient',duration:2000})
    this.router.navigate(['/admin'])
  }

  msg:string="no paid yet.."
  btnMsg:string="pay now"
  pay(){

    this.paid = !this.paid;
    if(this.paid) {
      this.msg="Successfuly paid..";
      this.btnMsg="withdraw";
    }else{
      this.msg="no paid yet.."
  this.btnMsg="pay now"
    }

  }
        print(){
          window.print()
        }

}

