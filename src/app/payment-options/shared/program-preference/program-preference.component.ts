import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-preference',
  templateUrl: './program-preference.component.html',
  styleUrls: ['./program-preference.component.css']
})
export class ProgramPreferenceComponent implements OnInit {
  checked = true;
  indeterminate = false;

  checked1 = true;
  indeterminate1 = false;

  checked2 = false;
  indeterminate2 = false;

  checked3 = true;
  indeterminate3 = false;

  checked4 = false;
  indeterminate4 = false;

  checked5 = false;
  indeterminate5 = false;

  checked6 = false;
  indeterminate6 = false;

  checked7 = false;
  indeterminate7 = false;

  checked8 = true;
  indeterminate8 = false;

  checked9 = false;
  indeterminate9 = false;
  checked10 = false;
  checked91 = false;
  indeterminate91 = false;

  checked92 = true;
  indeterminate92 = false;
  panelOpenState = true;
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  foods = [
    { value: 'none', viewValue: 'None' },
    { value: 'interest rate', viewValue: 'Interest Rate' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
