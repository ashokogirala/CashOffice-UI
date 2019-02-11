import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypointmasterRoutingModule } from './paypointmaster-routing.module';
import { DebitfileTemplateAssignmentComponent } from './debitfile-template-assignment.component';
import { FileDesignerComponent } from './filedesigner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaypointComponent } from './paypoint/paypoint.component';

@NgModule({
  imports: [
    CommonModule,
    PaypointmasterRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [DebitfileTemplateAssignmentComponent,
    FileDesignerComponent,
    PaypointComponent]
})
export class PaypointMasterModule { }
