import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  category: string;
  labelen: string;
  labelfr: string;
  finance: string;
  lease: string;
  cash: string;
  new: string;
  used: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    category: 'Dealer Prep. Fee', labelen: 'Prep Fee',
    labelfr: 'Fee du Prep', finance: '$75.00', lease: '$75.00', cash: '$75.00', new: 'yes', used: 'yes'
  },
  {
    category: 'Misc. Fee', labelen: 'Misc. Fee',
    labelfr: 'Fee Misc.', finance: '$150.00', lease: '$150.00', cash: '$150.00', new: 'yes', used: 'no'
  },
  {
    category: 'Documentation Fee', labelen: 'Doc Fee',
    labelfr: 'Fee de Docs', finance: '$90.00', lease: '$90.00', cash: '$90.00', new: 'yes', used: 'yes'
  }

];
@Component({
  selector: 'app-dealer-fees',
  templateUrl: './dealer-fees.component.html',
  styleUrls: ['./dealer-fees.component.css']
})
export class DealerFeesComponent implements OnInit {
  headerText = 'PaymentDriver - Dealer Fees';
  displayedColumns: string[] = ['category', 'labelen', 'labelfr', 'finance', 'lease', 'cash', 'new', 'used', 'action'];
  dataSource = ELEMENT_DATA;
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
