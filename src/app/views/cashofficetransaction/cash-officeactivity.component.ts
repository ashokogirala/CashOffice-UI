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
        cashOffActivityId: new FormControl('',Validators.required),
        cashOfficeId: new FormControl('',Validators.required),
       branchCode: new FormControl('',Validators.required),
        receiptDate: new FormControl('',Validators.required)
      }
    )
  }




  ngOnInit() {
    let obs = this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/activity');
    obs.subscribe(response => {
      console.log(response);
      this.activityDetails =response;
    }
    );
  }


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
