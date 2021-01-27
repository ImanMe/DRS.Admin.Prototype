import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent implements OnInit {
  checked = false;
  indeterminate = false;

  checked1 = false;
  indeterminate1 = false;

  checked2 = false;
  indeterminate2 = false;

  checked3 = false;
  indeterminate3 = false;

  checked4 = false;
  indeterminate4 = false;

  checked5 = false;
  indeterminate5 = false;

  checked6 = false;
  indeterminate6 = false;

  checked7 = false;
  indeterminate7 = false;

  checked8 = false;
  indeterminate8 = false;

  checked9 = false;
  indeterminate9 = false;

  checked91 = false;
  indeterminate91 = false;

  checked92 = false;
  indeterminate92 = false;

  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  foods = [
    { value: 'none', viewValue: 'None' },
    { value: 'interest rate', viewValue: 'Interest Rate' },
  ];

  isChecked = true;
  panelOpenState = true;
  constructor() { }

  ngOnInit(): void {
  }

}
