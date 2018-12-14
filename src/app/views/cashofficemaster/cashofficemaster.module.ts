// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Forms Component
import { FormsComponent } from './forms.component';

import { TablesComponent } from './tables.component';

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';

// Carousel Component
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselsComponent } from './carousels.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CollapsesComponent } from './collapses.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PaginationsComponent } from './paginations.component';



// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';



// Components Routing
import { CashOfficeMasterRoutingModule } from './cashofficemaster-routing.module';
import { SetUpPaymentMethodComponent } from './setuppaymentmethod.component';
import { SetUpApplicationsComponent } from './setupapplications.component';
import { SetUpCashierComponent } from './setupcashier.component';
import { SetUpCashOfficeComponent } from './setupcashoffice.component';
import { AssignCashierComponent } from './assigncashier.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CashOfficeMasterRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot()
  ],
  declarations: [
    SetUpCashierComponent,
    FormsComponent,
    TablesComponent,    
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent ,
    SetUpPaymentMethodComponent,
    SetUpApplicationsComponent,
    SetUpApplicationsComponent   ,
    SetUpCashOfficeComponent ,
    AssignCashierComponent
  ]
})
export class CashOfficeMasterModule { }
