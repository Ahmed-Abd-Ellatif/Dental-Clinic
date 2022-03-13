import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imgUrl:string='assets/images/about-img.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
