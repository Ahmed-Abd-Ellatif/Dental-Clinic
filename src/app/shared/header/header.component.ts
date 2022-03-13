import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
toggle:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle(){
    this.toggle = !this.toggle;
  }

}
