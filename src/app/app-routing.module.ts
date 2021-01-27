import { OtherSettingsComponent } from './other-settings/other-settings.component';
import { DealerFeesComponent } from './dealer-fees/dealer-fees.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { LendersComponent } from './lenders/lenders.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: GeneralSettingsComponent },
  { path: 'generalsettings', component: GeneralSettingsComponent },
  { path: 'lenders', component: LendersComponent },
  { path: 'paymentoptions', component: PaymentOptionsComponent },
  { path: 'dealerfees', component: DealerFeesComponent },
  { path: 'othersettings', component: OtherSettingsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
