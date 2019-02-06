import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaymentMethod } from './paymentMethod.interface';
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
        payMethodCode: new FormControl(),
        payMethodDesc: new FormControl(),
        enabled: new FormControl()
      }
    )
  }
  ngOnInit() {
    let obs = this.http.get('http://localhost:9090//CashOffice-Test/api/paymentMethod');
    obs.subscribe(response => {
      console.log(response);
      this.pmtMethods =response;
    }
    );
  }
  onSubmit(value) {
    console.log(this.paymentMethod.value);
    this.http.post('http://localhost:9090//CashOffice-Test/api/createPaymentMethod',
      this.paymentMethod.value).subscribe(
        response => {
          console.log(response);
          alert("Payment method is successfully Created");
        },error =>{
          alert("Error while saving payment method");
        }
      );
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
