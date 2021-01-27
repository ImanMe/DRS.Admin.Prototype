import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-program-settings',
  templateUrl: './program-settings.component.html',
  styleUrls: ['./program-settings.component.css']
})
export class ProgramSettingsComponent implements OnInit {
  checked = false;
  checked1 = true;
  indeterminate = false;



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
