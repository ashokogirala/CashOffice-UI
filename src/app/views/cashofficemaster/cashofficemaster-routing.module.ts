import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetUpCashierComponent } from './setupcashier.component';
import { FormsComponent } from './forms.component';
import { TablesComponent } from './tables.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { SetUpPaymentMethodComponent } from './setuppaymentmethod.component';
import { SetUpApplicationsComponent } from './setupapplications.component';
import { SetUpCashOfficeComponent } from './setupcashoffice.component';
import { AssignCashierComponent } from './assigncashier.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'CashOffice Master'
    },
    children: [
      {
        path: 'setupcashier',
        component: SetUpCashierComponent,
        data: {
          title: 'Setup-Cashier'
        }
      },
      {
        path: 'setuppaymentmethod',
        component: SetUpPaymentMethodComponent,
        data: {
          title: 'Setup-PaymentMethod'
        }
      },
      {
        path: 'setupapplications',
        component: SetUpApplicationsComponent,
        data: {
          title: 'Setup-Applications'
        }
      },
      {
        path: 'setupcashoffice',
        component: SetUpCashOfficeComponent,
        data: {
          title: 'Setup-CashOffice'
        }
      },
      {
        path: 'assigncashier',
        component: AssignCashierComponent,
        data: {
          title: 'Assign-Cashier'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashOfficeMasterRoutingModule {}
