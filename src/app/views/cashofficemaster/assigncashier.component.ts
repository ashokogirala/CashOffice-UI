import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PagerService, GlobalServices } from '../../services';
import { apiURL } from '../../_nav';

@Component({
  templateUrl: 'assigncashier.component.html'
})
export class AssignCashierComponent {
  cashOffice: any;
  cashiers: any;
  asgndCashiers: any;
  pager: any = {};
  pagedItems: any[];
  filteredCashiers :any;
  constructor(private http: HttpClient, private pagerService: PagerService,private gs:GlobalServices) { }
  assignCashierForm = new FormGroup({
    cashOfficeCode: new FormControl('', Validators.required),
    cashOfficeDesc: new FormControl(),
    cashierCode: new FormControl('', Validators.required),
    cashierName: new FormControl(),
    branchName: new FormControl(),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl(),
    isSenior: new FormControl(false)
  });

  ngOnInit() {
    this.http.get(apiURL + '/getCashOfficeDetails')
      .subscribe(response => {
        //console.log(response);
        this.cashOffice = response;
        //this.setPage(1);
      });
    this.http.get(apiURL + '/cashiers').subscribe(
      (response) => {
       // console.log(response);
        this.cashiers = response;
        this.filteredCashiers = this.cashiers;
      }
    );
  }
  updateDesc(event) {
    this.cashiers = this.filteredCashiers;
    let co = this.cashOffice.filter(co => co.cashOfficeCode == event.target.value)[0];
    //console.log(event.target.value + JSON.stringify(co));
    this.assignCashierForm.patchValue({
      cashOfficeDesc: co.cashOfficeDesc
    })
    this.http.get(apiURL+'/cashiers/assignedCashiers/' + JSON.stringify(co.cashOfficeId)).subscribe(
      data => {
        this.asgndCashiers = data;
        console.log(this.asgndCashiers);
        this.setPage(1);
        for (var ac in this.asgndCashiers) {
          for (var ca in this.cashiers) {
            this.cashiers = this.cashiers.filter(cs => cs.cashierCode != this.asgndCashiers[ac].cashierCode);
          }
        }
       // console.log(this.cashiers);
      },
      error => {
        alert("error at fetching assigned cashiers of the cashoffice");
      }
    )
  }
  updateDetls(event) {
    let cashr = this.cashiers.filter(app => app.cashierCode == event.target.value)[0];
    console.log(cashr);
    this.assignCashierForm.patchValue({
      //cashOfficeDesc: this.assignCashierForm.controls["cashOfficeDesc"].value,
      cashierName: cashr.cashierName,
      branchName: cashr.branchName,
      startDate:this.gs.fromJsonDate(cashr.startDate),
      endDate:this.gs.fromJsonDate(cashr.endDate),
      isSenior: false
    });
  }
  populateDetails(value,event){
    let cashr = this.asgndCashiers.filter(app => app.cashierId == value.cashierId)[0];
    this.cashiers.push(cashr);
    this.assignCashierForm.patchValue({
      cashierCode:cashr.cashierCode,
      cashierName: cashr.cashierName,
      branchName: cashr.branchName,
      startDate: this.gs.fromJsonDate(cashr.startDate),
      endDate: this.gs.fromJsonDate(cashr.endDate),
      isSenior: cashr.isSenior
    });
  }
  clearForm(){
    this.assignCashierForm.reset();
    this.pagedItems=null;
    this.ngOnInit();
  }
  onSubmit() {
    console.log(this.assignCashierForm.value);
    if (this.assignCashierForm.get('isSenior').value == null) {
      this.assignCashierForm.controls['enabled'].setValue(false);
    }
    this.http.post(apiURL+'/cashiers/assignCashier', this.assignCashierForm.value)
      .subscribe(
        data => {
          console.log(data);
          alert("successfully assigned cashier to cashoffice");   
          this.clearForm();       
        }, error => {
          alert(error.error.message);
        }
      );
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.asgndCashiers.length, page, 5);

    // get current page of items
    this.pagedItems = this.asgndCashiers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}



