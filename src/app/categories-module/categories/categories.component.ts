import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  blockItems: String[] = [];
  colors: String[] = ["blue", "green", "red", "orange"];

  constructor(private netService: NetworkService, private router: Router) { }

  ngOnInit(): void {
    this.netService.getAllCategories().subscribe(res => {
      this.blockItems = <string[]>res;
    });
  }
  openCategory(item: String) {
    this.router.navigate(['goods/' + item]);
  }
}
