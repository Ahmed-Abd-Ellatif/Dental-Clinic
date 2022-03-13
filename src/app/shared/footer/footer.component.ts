import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
information=[
  {title:'phone number',icon:'fas fa-phone',contact:'0122-892-1358'},
  {title:'our address',icon:'fas fa-map-marker-alt',contact:'Egypt, portsaid'},
  {title:'opening hours',icon:'fas fa-clock',contact:'10:00am : 10:00pm'},
  {title:'email address',icon:'fas fa-envelope',contact:'ahmedmahmoudfci@gmail.com'},
]
  constructor() { }

  ngOnInit(): void {
  }

}
