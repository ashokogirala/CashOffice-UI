import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankAdjustmentComponent } from './bank-adjustment.component';
import { BankPostingComponent } from './bank-posting.component';
import { ElectronicComponent } from './electronic.component' ;
import { BankProcessingComponent } from './bank-processing.component';
import { DirectDebitComponent } from './direct-debit.component';
import { ManualAdjustmentComponent } from './manual-adjustment.component' ;
import { ManualAllocationComponent } from './manual-allocation.component' ;
import { MisallocationCorrectionComponent } from './misallocation-correction.component' ;
import { PartialCorrectionComponent } from './partial-correction.component' ;
import { PaypointHistoryComponent } from './paypoint-history.component';
import { PaypointMisallocationComponent } from './paypoint-misallocation.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'Allocation' } ,

    children: [
      {
        path: 'bank-adjustment',
        component: BankAdjustmentComponent,
        data: {
          title: 'Bank Statement Re-Allocation'
        }        
      },
      {
        path: 'bank-posting',
        component: BankPostingComponent, 
        data: {
          title: 'Bank Statement Posting'
        }
      },
      {
        path: 'bank-processing',
        component: BankProcessingComponent,
        data: {
          title: 'Bank Stop Order Processing'
        }
      },
      {
        path: 'direct-debit',
        component: DirectDebitComponent,
        data: { 
          title: 'Direct Debit Processing'
        }
      },
      {
        path: 'electronic',
        component:ElectronicComponent,
        data: {
          title: 'Electronic Allocation'
        }
      },
      {
        path: 'manual-adjustment',
        component: ManualAdjustmentComponent,
        data: {
          title: 'Manual Adjustment'
        }        
      },
      {
        path: 'manual-allocation',
        component: ManualAllocationComponent,
        data: {
          title: 'Manual Allocation'
        }        
      },    
      {
        path: 'correction',
        component: MisallocationCorrectionComponent,
        data: {
          title: 'MisAllocation Correction'
        }        
      },
      {
        path: 'partial-correction',
        component: PartialCorrectionComponent,
        data: { title: 'Partial MisAllocation Correction' }
        
      },
      {
        path: 'paypoint-history',
        component: PaypointHistoryComponent,
        data: { title: 'PayPoint Collection History' }       
      },
      {
        path: 'paypoint-misallocation',
        component: PaypointMisallocationComponent,
        data: { title: 'PayPoint MisAllocation' }        
      },
      {
        path: '**',
        redirectTo: '' /// dbg. TO-DO 404: Page Not Found component.
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllocationRoutingModule {}  
  