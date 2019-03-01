// Bank Statement - Paypoint Reports Module
// NOTE: Defines custom Pipe (MyFilterPipe) to filter transactions from transactions array

import { Component, OnInit, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
// import { ReceiptListingComponent } from './receipt-listing.component';

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule]
})

@Component({
  templateUrl: './approve-receiptcancellation.component.html'
})
export class approvereceiptcancellationComponent {

  today = new Date() ;

  isCollapsed: boolean = true;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }


  receiptInput = new FormGroup({
    recieptNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$") ] ), 
    cashierName: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
  } ) ;
  receiptDetails = new FormGroup({
    recieptNumber_r: new FormControl('', Validators.required), 
    recieptDate: new FormControl('', Validators.required),
    cashOffice: new FormControl('', Validators.required),
    comments: new FormControl('', Validators.required),
    recievedFrom: new FormControl('', Validators.required),
    pstat: new FormControl('', Validators.required),
    cashier: new FormControl('', Validators.required),
    recieptAmount: new FormControl('', Validators.required),
    cancelR: new FormControl('', Validators.required),
  } ) ;

  onSubmit(){
    this.displayReport = true ; // show container for the results
    this.displaySearch = false ; // show container for the results
  
    console.table(this.receiptInput.value) ;

    // dbg: get a random item from the array
    this.receipt = this.receipts[ Math.floor( Math.random() * Math.floor( this.receipts.length ) )  ] ; 

  }
  cashiers = [ 
    {cName: "Kabelo Tsheole"},
    {cName: "Ahmed Tselaeile"},
    {cName: "Forest Gump"},
    {cName: "Miller Life"},
    {cName: "Kevin Hollard"}
  ];
  recAllo = [ 
    {aMode: "TOPL",aApplication:"POLICY",aAllocated:"479.25"}
  ];
  topl = [ 
    {activity: "GN",period:"Dec 1,2011",policyNo:"80764080",stat:"Lapsed",payer:"TSHENYEGO MALOPE",
     arrears:"159.75",eamount:"159.75",aamount:"479.25",raId:"" }
  ]; 

  recDet = [ 
    {receiptDate: "Dec 26,1929",co:"Pala",comments:"",recFrom:"Tefo Kadimo",pStatus:"POSTED",
     pMethod:"CASH",Cname:"Miller Life",rAmount:"236.23",cReason:"" }
  ]; 
 
  receipt: any ;
  
  displayReport = false ;
  displaySearch = true ;

  toggleDisplayReport() { 
    this.displayReport = ! this.displayReport ;
  }

  // Dynamic Data: 
  receivedFrom = "Janet Dozen" ; 
  sum = 678.90 ;
  paymentType = "CSH" ;
  date = "21-Jun-11" ;
  branchCode = "102" ;
  cashier = "Janelle Dose" ;

  // An Array to hold dynamic data - Receipts
  receipts = [
    { application: "Group Life System", transactionType: "Group Funeral Premium Receipts", paypointID: "", paypointName: "", amount: "123.45"},
    { application: "Policy", transactionType: "Credit Class Premiums", policyNo: "1234567", payer: "John Doe", period: "21-Jun-11", amount: "678.90"},
    { application: "Sundry Receipts", transactionType: "Sundry Re-imbursement of Staff Advances", amount: "101.11"}
  ]

  // An Array to hold dynamic data - Bank Statements
  bankStatement =
    { bankAccNo: 747, bankStmID: 243, stmtNo: 10932, fromDate: "27-Jul-14", toDate: "27-Aug-14",
      openingBalance: 442.11, bankName: "Ftown Bank", inputDate: "08-Aug-14", cashierCode: 256, 
      cashierName: "Al Gore", closingBalance: 452.45 }
  
  // An Array to hold dynamic data - Statment Transations
  stmTransactions = [
    {bankStmID: 243, transDesc: "Auto Transfers", policyNo: "", policyPayor:"", payMode:"BSO", amount: 532.99},
    {bankStmID: 247, transDesc: "Bank Charges", policyNo: "", policyPayor:"", payMode:"BSO", amount: 232.61},
    {bankStmID: 243, transDesc: "Premium Receipts", policyNo: "", policyPayor:"", payMode:"BSO", amount: 362.55},
    {bankStmID: 243, transDesc: "Bank Charges", policyNo: "", policyPayor:"", payMode:"BSO", amount: 232.61}    
  ]

  netMovement: number = 
    this.stmTransactions.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;

}
