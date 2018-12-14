import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CreateCashier } from './CreateCashier.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  templateUrl: 'setupcashier.component.html'
})
export class SetUpCashierComponent {


  createCashier: FormGroup;
  constructor(private http: HttpClient) {
    this.createCashier = new FormGroup(
      {
        cashierCode: new FormControl(),
        cashierName: new FormControl(),
        loginId: new FormControl(),
        branchCode: new FormControl(),
        branchName: new FormControl({ value: '', disabled: true })
      }
    );
  }
  onSubmit({ value, valid }: { value: CreateCashier, valid: boolean }) {
    let obs = this.http.post('http://localhost:9090/api', this.createCashier.value).subscribe(data => {
      alert("User created successfully.");
    });
    console.log(value, valid);
  }

}
