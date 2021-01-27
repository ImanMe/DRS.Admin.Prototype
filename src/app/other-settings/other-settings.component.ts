import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-settings',
  templateUrl: './other-settings.component.html',
  styleUrls: ['./other-settings.component.css']
})
export class OtherSettingsComponent implements OnInit {
  headerText = 'PaymentDriver - Other Payment Settings';
  panelOpenState = true;
  basicCh = false;
  preqCg = false;
  fullCh = true;
  constructor() { }

  ngOnInit(): void {
  }

}
