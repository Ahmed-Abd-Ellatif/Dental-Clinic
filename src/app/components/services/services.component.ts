import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
services=[
  {imgUrl:'assets/images/icon-1.svg', title:'Alignment specialist'},
  {imgUrl:'assets/images/icon-2.svg', title:'cosmetic dentistry'},
  {imgUrl:'assets/images/icon-3.svg', title:'Oral hygiene Experts'},
  {imgUrl:'assets/images/icon-4.svg', title:'root canal specialist'},
  {imgUrl:'assets/images/icon-5.svg', title:'live Dental Advisory'},
  {imgUrl:'assets/images/icon-6.svg', title:'cavitv insnection'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
