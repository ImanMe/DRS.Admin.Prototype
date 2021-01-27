import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent implements OnInit {
  headerText = 'PaymentDriver - Payment Options';
  constructor() { }

  ngOnInit(): void {
  }

}
