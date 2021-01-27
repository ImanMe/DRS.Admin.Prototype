import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css']
})
export class GeneralSettingsComponent implements OnInit {
  headerText = 'PaymentDriver - General Settings';
  panelOpenState = true;
  basicCh = false;
  preqCg = false;
  fullCh = true;

  constructor() { }

  ngOnInit(): void {
  }

}
