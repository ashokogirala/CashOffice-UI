import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaypointmasterRoutingModule } from './paypointmaster-routing.module';
import { DebitfileTemplateAssignmentComponent } from './debitfile-template-assignment.component';
import { FileDesignerComponent } from './filedesigner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PaypointmasterRoutingModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [DebitfileTemplateAssignmentComponent,
    FileDesignerComponent]
})
export class PaypointMasterModule { }
