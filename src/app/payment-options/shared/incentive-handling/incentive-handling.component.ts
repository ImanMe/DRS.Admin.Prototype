import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incentive-handling',
  templateUrl: './incentive-handling.component.html',
  styleUrls: ['./incentive-handling.component.css']
})
export class IncentiveHandlingComponent implements OnInit {
  checked1 = true;
  checked2 = false;
  checked3 = false;
  checked4 = true;
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
