import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { TopMenuComponent } from './core/top-menu/top-menu.component';
import { SideMenuComponent } from './core/side-menu/side-menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { LendersComponent } from './lenders/lenders.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { DealerFeesComponent } from './dealer-fees/dealer-fees.component';
import { CashComponent } from './payment-options/cash/cash.component';
import { LeaseComponent } from './payment-options/lease/lease.component';
import { RetailComponent } from './payment-options/retail/retail.component';
import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { ProgramSettingsComponent } from './payment-options/shared/program-settings/program-settings.component';
import { ProgramPreferenceComponent } from './payment-options/shared/program-preference/program-preference.component';
import { ProgramFrequencyComponent } from './payment-options/shared/program-frequency/program-frequency.component';
import { IncentiveHandlingComponent } from './payment-options/shared/incentive-handling/incentive-handling.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SideMenuComponent,
    HeaderComponent,
    GeneralSettingsComponent,
    LendersComponent,
    PaymentOptionsComponent,
    DealerFeesComponent,
    CashComponent,
    LeaseComponent,
    RetailComponent,
    OtherSettingsComponent,
    ProgramSettingsComponent,
    ProgramPreferenceComponent,
    ProgramFrequencyComponent,
    IncentiveHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatExpansionModule,
    MatBadgeModule,
    MatTableModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
