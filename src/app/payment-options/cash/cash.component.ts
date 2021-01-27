import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  checked = false;
  checked1 = true;
  checked2 = false;
  checked3 = true;
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
