import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.css']
})
export class HeaderBannerComponent implements OnInit {

  imageSrc: string = 'assets/images/bg.jpg';
  bannerTitle:string = "Welcome to the Store";
  bannerDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  constructor() { }

  ngOnInit(): void {
  }

}
