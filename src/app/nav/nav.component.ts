import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  searchText = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

  search(searchText) {
    console.log(searchText);
    }
}
