import { Component, OnInit } from '@angular/core';
import { Links } from '../constants/links';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  showMenu = true;
  links;
  constructor() { }

  ngOnInit(): void {
    this.links = Links;
  }

  toggleProduct(product): void {
    if (product.collapse === false) {
      product.collapse = true;
    } else {
      product.collapse = false;
    }

  }

}
