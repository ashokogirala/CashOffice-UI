import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Admin Routing
import { AllocationRoutingModule } from './allocation-routing.module';

// Cash Office - ALLOCATION Module
import { ElectronicComponent } from './electronic.component';
import { BankAdjustmentComponent } from './bank-adjustment.component';
import { BankPostingComponent } from './bank-posting.component';
import { BankProcessingComponent } from './bank-processing.component';
import { DirectDebitComponent } from './direct-debit.component' ;
import { ManualAdjustmentComponent } from './manual-adjustment.component' ;
import { ManualAllocationComponent } from './manual-allocation.component' ;
import { MisallocationCorrectionComponent } from './misallocation-correction.component' ;
import { PartialCorrectionComponent } from './partial-correction.component' ;
import { PaypointHistoryComponent } from './paypoint-history.component';
import { PaypointMisallocationComponent } from './paypoint-misallocation.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  imports: [
    CommonModule,
    AllocationRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule, ReactiveFormsModule
    , TabsModule
  ],
  declarations: [
    ElectronicComponent,
    BankAdjustmentComponent,
    BankPostingComponent,
    BankProcessingComponent,
    DirectDebitComponent,
    ManualAdjustmentComponent,
    ManualAllocationComponent,
    MisallocationCorrectionComponent,
    PartialCorrectionComponent,
    PaypointHistoryComponent,
    PaypointMisallocationComponent
  ]
})
export class AllocationModule { }
