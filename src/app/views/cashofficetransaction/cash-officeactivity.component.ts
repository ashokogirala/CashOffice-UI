import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createactivity } from './createactivity.interface';
import { apiURL } from '../../_nav';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators]
})

@Component({
  templateUrl: 'cash-officeactivity.component.html'
})

export class cashofficeactivityComponent {

  activity: any;
  createactivity: FormGroup;
  activityDetails :any;  
  constructor(private http: HttpClient) {
    this.createactivity = new FormGroup(
      {
        cashOffActivityId: new FormControl(''),
        cashOfficeId: new FormControl(''),
       branchCode: new FormControl(''),
        receiptDate: new FormControl('')
      }
    )
  }

  ngOnInit() {
    this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/activity')
    .subscribe(response => {
     
      this.activityDetails =response;

      console.log(this.activityDetails);

         console.log(this.activityDetails[0].cashOffActivityId)

     this.createactivity.patchValue({
         
      cashOffActivityId: this.activityDetails[0].cashOffActivityId,
      cashOfficeId: this.activityDetails[0].cashOfficeId,
      branchCode:this.activityDetails[0].branchCode ,
       receiptDate: this.activityDetails[0].receiptDate
     
     });
    });
    }
   

//     attribute1: null
// attribute2: null
// attribute3: null
// attribute4: null
// attribute5: null
// attribute6: null
// branchCode: "108"
// cashOffActivityId: 37
// cashOfficeId: 2
// cashierId: 4
// comments: null
// createdBy: "rmodangula"
// creationDate: "2011-03-10T03:23:42.000+0000"
// modifiedBy: "rmodangula"
// modifiedDatetime: "2011-03-10T12:03:23.000+0000"
// receiptDate: "2011-03-10T03:23:42.000+0000"
// status: "C"


 

 
  // fetchActivities(cashOffActivityId, cashOfficeId, branchCode,receiptDate) {  
  //   let activity=this.activityDetails;
  
  //       this.createactivity.patchValue({
  //         cashOffActivityId: activity[0].cashOffActivityId,
  //         cashOfficeId: activity[0].cashOfficeId,
  //         branchCode: activity[0].branchCode,
  //         receiptDate: activity[0].receiptDate
        
  //       });
  //     } 


  //fetchActivities(cashOffActivityId, cashOfficeId, branchCode,receiptDate) {
   // this.createactivity.patchValue({
    //  cashOffActivityId: cashOffActivityId,
   //   cashOfficeId: cashOfficeId,
    //  branchCode: branchCode,
    //  receiptDate: receiptDate
  //  })
 // }
  //onSubmit({ value, valid }: { value: createactivity, valid: boolean }) {
    //console.log(valid);
    //if(valid){
    //let obs = this.http.post(apiURL+'/activity/createactivity',this.createactivity.value)
  //  /.subscribe(
       // data => {
                 // console.log(data);
                //  alert("User created/updated successfully.");
              //  },
     //   error => {
         //         alert("Error while creating new cashier with given details");
          //        console.log('oops', error)
        //       }
  //  );
 //   }
 // }


  
 
}
