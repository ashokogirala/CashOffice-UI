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
  templateUrl: './misallocation-correction.component.html'
})
export class MisallocationCorrectionComponent {
 
  viewMisallocations = false ;
  makeCorrections = false ; // show editable table for "Premium Reallocation" transactions.

  toggleMakeCorrections(transaction_type){
    if ( transaction_type == 'allocate')
    {
      this.makeCorrections = true ;
    }

    if ( transaction_type == 'reverse')
    {
      this.makeCorrections = false ;
    }
  }

  search(x){
    console.log("Searching " + x) ;
    this.viewMisallocations = true ;
  console.log( this.selectedItem2.length );

  }
    
  misallocatedInput = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    misallocationID: new FormControl({value: '0', disabled: true}),

    radios: new FormControl(''), // radio button things

    transType: new FormControl('') // radio button things
  }) ;
  myForm = new FormGroup({
    policyCode2: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    payer: new FormControl('', Validators.required),

    
  }) ;


// An Array to hold dynamic data - Misallocations:  
misallocations = [
  {
    collID: 20, policyCode: "210611", policyStatus: "Terminated", period: "2012-06-21",
     payer: "Jane Doe", amount: 432.11, postingStatus: "T", receiptNo: 123456
  },
  {
    collID: 14, policyCode: "210617", policyStatus: "Terminated", period: "2013-06-21",
     payer: "John Doe", amount: 114.32, postingStatus: "U", receiptNo: 123457
  },
  {
    collID: 12, policyCode: "210618", policyStatus: "Terminated", period: "2014-06-21",
     payer: "Joanne Odin", amount: 413.12, postingStatus: "V", receiptNo: 123458
  }
]

selectedItem: any ; // placeholder for a specific collection item
selectedItem2=[] ; // placeholder for a specific collection item
 
onSelect(x, position) 
{
  var element = <HTMLInputElement> document.getElementById(position);
  var isChecked = element.checked;
  
  this.selectedItem = x ;
  console.log("Selected item No. " + position ) ; // dbg
  
  if(isChecked){
    this.selectedItem2.push(x);
    // console.log("issa chkd") ; //dbg
  }
  else
  {
    // console.table(this.selectedItem2);
    this.selectedItem2.splice( this.selectedItem2.findIndex(a => a.collID==x.collID) ,1);
    // console.table(this.selectedItem2);
    // position-1;

  }
  
  console.log( this.selectedItem2.length );
  this.makeCorrections = true;
}

clear(){
  this.selectedItem2 = [];
  this.misallocatedInput.get('policyCode').reset();
  this.misallocatedInput.get('misallocationID').setValue(0);
  this.viewMisallocations = false;
  this.makeCorrections = false;
}

exit(){
  // Re-direct to app landing page
  window.location.href = "http://localhost:4200/#/dashboard" ;
}

save(){}

// 

  total: number = 
    this.misallocations.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;
    total2: number = 
    this.selectedItem2.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;


}