import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// import { ButtonsComponent } from './buttons.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Admin Routing
import { AllocationRoutingModule } from './allocation-routing.module';

// Cash Office - ALLOCATION Module
import { ElectronicAllocationComponent } from './electronic-allocation.component';
import { BankStatementAdjustmentVoucherComponent} from './bank-statement-adjustment-voucher.component';
import { BankStatementPostingComponent } from './bank-statement-posting.component';
import { BankStopOrderProcessingComponent } from './bank-stop-order-processing.component';
import { DirectDebitProcessingComponent } from './direct-debit-processing.component' ;
import { ManualAdjustmentVoucherComponent } from './manual-adjustment-voucher.component' ;
import { ManualAllocationComponent } from './manual-allocation.component' ;
import { MisallocationCorrectionComponent } from './misallocation-correction.component' ;
import { PartialMisallocationCorrectionComponent } from './partial-misallocation-correction.component' ;
import { PaypointCollectionHistoryComponent } from './paypoint-collection-history.component';
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
    ElectronicAllocationComponent,
    BankStatementAdjustmentVoucherComponent,
    BankStatementPostingComponent,
    BankStopOrderProcessingComponent,
    DirectDebitProcessingComponent,
    ManualAdjustmentVoucherComponent,
    ManualAllocationComponent,
    MisallocationCorrectionComponent,
    PartialMisallocationCorrectionComponent,
    PaypointCollectionHistoryComponent,
    PaypointMisallocationComponent
  ]
})
export class AllocationModule { }
