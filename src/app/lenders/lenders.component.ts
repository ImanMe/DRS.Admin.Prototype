import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenders',
  templateUrl: './lenders.component.html',
  styleUrls: ['./lenders.component.css']
})
export class LendersComponent implements OnInit {
  headerText = 'PaymentDriver - Lenders';
  panelOpenState = true;
  lenders1: string[] = ['Desjardins', 'TD Auto Finance', 'GM Financial Loan', 'National Bank', 'CIBC Auto Finance', 'Royal Bank of Canada', 'ATB', 'Bank Of Montreal', 'Scotiabank', 'General Bank of Canada'];
  lenders2: string[] = ['Desjardins', 'TD Auto Finance', 'GM Financial Loan', 'National Bank', 'CIBC Auto Finance', 'Royal Bank of Canada', 'ATB', 'Bank Of Montreal', 'Scotiabank', 'General Bank of Canada'];
  constructor() { }

  ngOnInit(): void {
  }

}
