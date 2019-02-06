import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'assigncashier.component.html'
})
export class AssignCashierComponent {
  cashOffice: any;
  cashiers: any;
  asgndCashiers: any;
  constructor(private http: HttpClient) { }
  assignCashierForm = new FormGroup({
    cashOfficeCode: new FormControl('', Validators.required),
    cashOfficeDesc: new FormControl('', Validators.required),
    cashierCode: new FormControl('', Validators.required),
    cashierName: new FormControl('', Validators.required),
    branchName: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    isSenior: new FormControl(false)
  });

  ngOnInit() {
    this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/getCashOfficeDetails")
      .subscribe(response => {
        console.log(response);
        this.cashOffice = response;
        //this.setPage(1);
      });
    this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/cashiers').subscribe(
      (response) => {
        console.log(response);
        this.cashiers = response;
      }
    );
  }
  updateDesc(event) {
    let co = this.cashOffice.filter(co => co.cashOfficeCode == event.target.value)[0];
    console.log(event.target.value);
    this.assignCashierForm.patchValue({
      cashOfficeDesc: co.cashOfficeDesc
    })
    this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/cashiers/assignedCashiers/' + JSON.stringify(co.cashOfficeId)).subscribe(
      data => {
        this.asgndCashiers = data;
      },
      error => {
        alert("error at fetching assigned cashiers of the cashoffice");
      }
    )
  }
  updateDetls(event) {
    let cashr = this.cashiers.filter(app => app.cashierId == event.target.value)[0];
    //console.log(this.assignCashierForm.controls["cashOfficeDesc"].value);
    this.assignCashierForm.patchValue({
      //cashOfficeDesc: this.assignCashierForm.controls["cashOfficeDesc"].value,
      cashierName: cashr.cashierName,
      branchName: cashr.branchName,
      startDate: cashr.startDate,
      endDate: cashr.endDate,
      isSenior: false
    });
  }
  onSubmit() {
    console.log(this.assignCashierForm.value);
    if (this.assignCashierForm.get('isSenior').value == null){
      this.assignCashierForm.controls['enabled'].setValue(false);
    }
    this.http.post('http://192.168.1.158:9090/CashOffice-Test/api/cashiers/assignCashier', this.assignCashierForm.value)
      .subscribe(
        data => {
          this.asgndCashiers.push(data);
        }, error => {
          alert("Error at assigning cashier to the cashoffice");
        }
      );
  }
}



