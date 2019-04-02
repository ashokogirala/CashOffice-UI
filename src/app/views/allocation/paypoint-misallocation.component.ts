import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators
]
})

@Component({
  // selector: 'app-user-management',
  templateUrl: './paypoint-misallocation.component.html'
})
export class PaypointMisallocationComponent {
 
  paypointMis = new FormGroup({
    rid: new FormControl('', Validators.required),

  });

  paypointMis2 = new FormGroup({
    rNo: new FormControl('', Validators.required),
    gAmnt: new FormControl('', Validators.required),
    pp: new FormControl('', Validators.required),
    pp1: new FormControl('', Validators.required),
    period: new FormControl("", Validators.required),

  });

  paypointMis3 = new FormGroup({
    ppnt: new FormControl('', Validators.required),
    ppName: new FormControl('', Validators.required),
    period2: new FormControl('', Validators.required),
    crF: new FormControl('', Validators.required),
    period: new FormControl("", Validators.required),

  });
  
  paypoints = [
    {pID:234,pName:"Botswana Railways"},
    {pID:834,pName:"Botswana Post"},
  ]

  creditF = [
    {fName:"inquisition.csv",tcfa:170000.89},
    {fName:"0045Cr234rt.csv",tcfa:890000.78},
  ]

  onSubmit(){
    console.table(this.paypointMis.value) ;
}
}