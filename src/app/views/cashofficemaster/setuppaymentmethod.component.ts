import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentMethod } from './paymentMethod.interface';
import { apiURL } from '../../_nav';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  templateUrl: 'setuppaymentmethod.component.html'
})
export class SetUpPaymentMethodComponent {

  paymentMethods: PaymentMethod[] = [];
  paymentMethod: FormGroup;
  pmtMethods :any;
  constructor(private http: HttpClient) {
    this.paymentMethod = new FormGroup(
      {
        payMethodCode: new FormControl('',Validators.required),
        payMethodDesc: new FormControl('',Validators.required),
        enabled: new FormControl()
      }
    )
  }
  ngOnInit() {
    let obs = this.http.get(apiURL+'/paymentMethod');
    obs.subscribe(response => {
      console.log(response);
      this.pmtMethods =response;
    }
    );
  }
  onSubmit(value) {
    console.log(this.paymentMethod.value);
    this.http.post(apiURL+'/createPaymentMethod',
      this.paymentMethod.value).subscribe(
        response => {
          console.log(response);
          alert("Payment method is successfully Created/Updated");
        },error =>{
          alert("Error while saving payment method");
        }
      );
  }
  search(value){
    let pmt=this.pmtMethods.filter(pmt =>pmt.payMethodCode==value.toUpperCase());
    this.paymentMethod.setValue({
        payMethodCode:pmt[0].payMethodCode,
        payMethodDesc:pmt[0].payMethodDesc,
        enabled: pmt[0].enabled=="Y" ? true:false
      });
  }
  clear(){
    this.paymentMethod.setValue(
      {
        payMethodCode:'',
        payMethodDesc:'',
        enabled: false
      }
    )
  }

}
