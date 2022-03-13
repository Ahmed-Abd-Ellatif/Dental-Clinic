import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {
process=[
  {imgUrl:'assets/images/process-1.png',title:'cosmtic dentistry'},
  {imgUrl:'assets/images/process-2.png',title:'pediatric dentistry'},
  {imgUrl:'assets/images/process-3.png',title:'cosmtic dentistry'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
