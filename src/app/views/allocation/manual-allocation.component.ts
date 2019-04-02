// Partial MisAllocation Correction - Allocation Module

import { Component,NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

import { FormBuilder, FormArray } from '@angular/forms'; // form array things require FormGroup as well

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators

    , FormArray, FormBuilder
]
})

@Component({
  templateUrl: './manual-allocation.component.html'
})
export class ManualAllocationComponent {
 
  viewMisallocations = false ;
  makeCorrections = false ; // show editable table for "Premium Reallocation" transactions.


  search(x){
    console.log("Searching " + x) ;
    this.viewMisallocations = true ;
    this.makeCorrections = true ;
  }
    
  misallocatedInput = new FormGroup({
    receiptNo: new FormControl('', Validators.required),
    BSFlag: new FormControl('', Validators.required),

    misallocationID: new FormControl({value: '0', disabled: true}),

    
  }) ;

// An Array to hold dynamic data - Misallocations:  
misallocations = [
  {
    ppID: 234, period: "2012-06-21", gAmount: 123.677,rNo:123445, aAmount: 432.11,uAmount:345.97
  }
]

selectedItem: any ; // placeholder for a specific collection item
 
onSelect(x, position) 
{
  this.selectedItem = x ;
  console.log("Selected item No. " + ( position +1 ) ) ; // dbg
}

clear(){
  window.location.reload() ;
}

exit(){
  // Re-direct to app landing page
  this.viewMisallocations = false ;
    this.makeCorrections = true ;
}

save(){}

myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      corrections: this.fb.array([])
    })

  }

  get correctionForms() {
    return this.myForm.get('corrections') as FormArray
  }

  addCorrection() {

    const correction = this.fb.group({ 
      corSelect:[],
      corPolicyCode: [],
      corPeriod: [],
      corPartyID: [],
      corPayerName: [],
      corExpectedAmnt: [],
      corPurpose: [],
      corPurposeID: [],
      corPostStatus: [],
      corAllocatedAmnt: []
      
    })

    this.correctionForms.push(correction);
  }

  propInfoSelect = new FormControl('') ; // checkbox for existing items under "Amount Allocated To"

  propInfo =[
    {
      pcode:25902873,period:"27/09/1991",pID:58956,pName:"Gregory Seal",eAmount:789965.56,purp:"NB",purpID:2,
      pstatus:"POSTED",aAmount:758.69
     },
     {
      pcode:759432873,period:"02/09/1998",pID:78956,pName:"Liam Seal",eAmount:7965.56,purp:"NB",purpID:2,
      pstatus:"POSTED",aAmount:758.69
     }
];

  deleteCorrection(i) {
    this.correctionForms.removeAt(i)
  }

  post(){
    console.table(this.myForm.get('corrections').value) ; // dbg

    // other form-processing code here:
  }

  showAllocatedPolicies(){}

  totalAllocatedAmount: number = 432.11 ;
  totalUnallocatedAmount: number = 345.97;

}