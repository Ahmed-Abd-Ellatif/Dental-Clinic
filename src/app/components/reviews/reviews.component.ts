import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
reviews=[
  {imgUrl:'assets/images/pic-1.png',name:'John deo' ,title:'satisfied clients'},
  {imgUrl:'assets/images/pic-2.png',name:'John deo' ,title:'satisfied clients'},
  {imgUrl:'assets/images/pic-3.png',name:'John deo' ,title:'satisfied clients'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
