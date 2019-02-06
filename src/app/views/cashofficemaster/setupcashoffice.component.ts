import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

import { PagerService, GlobalServices } from './../../services/index';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  templateUrl: 'setupcashoffice.component.html'
})
export class SetUpCashOfficeComponent {
  cashOfficeForm: FormGroup;
  assignApplicationForm: FormGroup;
  assignPayMethodForm :FormGroup;
  cashOffice: any;
  allBranches: any;
  currValue: any;
  pager: any = {};
  pagedItems: any[];
  showDiv: boolean;
  showAppDiv: boolean;
  showPayMethodDiv: boolean;
  assignedapps: any;
  applications: any;
  currApp: any;
  assignedpayMethods :any;
  paymentMethods :any;
  currPaymentMethod :any;
  constructor(private http: HttpClient, private pagerService: PagerService, private gs: GlobalServices) {
    this.cashOfficeForm = new FormGroup({
      cashOfficeCode: new FormControl(),
      cashOfficeDesc: new FormControl(),
      branchCode: new FormControl(),
      branchName: new FormControl()
    });
    this.assignApplicationForm = new FormGroup({
      cashOfficeCode: new FormControl(),
      applicationCode: new FormControl(),
      applicationDesc: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    this.assignPayMethodForm = new FormGroup({
      cashOfficeCode: new FormControl(),
      pymtMethodCode: new FormControl(),
      pymtMethodDesc: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
  }
  ngOnInit() {
    this.mainPage();
    this.clearForm();
    this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/getCashOfficeDetails")
      .subscribe(response => {
        //console.log(response);
        this.cashOffice = response;
        this.setPage(1);
      });
    this.gs.getBranches()
      .subscribe(data => {
        this.allBranches = data
      });

  }
  mainPage() {
    this.showDiv = true;
    this.showAppDiv = false;
    this.showPayMethodDiv = false;
  }
  //executes when user click on assign application link in main screen
  showAssignApplication(value) {
    this.showDiv = false;
    this.showAppDiv = true;
    this.showPayMethodDiv = false;
    this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/getAppsAssignedToCO?CoCode=" + value)
      .subscribe(response => {
        //console.log(response);
        this.assignedapps = response;
      });
    this.assignApplicationForm.setValue({
      cashOfficeCode: value,
      applicationCode: '',
      applicationDesc: '',
      startDate: '',
      endDate: ''
    });
    this.gs.getApplications()
      .subscribe(data => {
       // console.log(data);
        this.applications = data;
      })
  }
  showAssignPayMethod(value) {
    this.showDiv = false;
    this.showAppDiv = false;
    this.showPayMethodDiv = true;
    this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/getPayMethodsAsgndToCO?CoCode=" + value)
      .subscribe(response => {
        //console.log(response);
        this.assignedpayMethods = response;
      });
    this.assignPayMethodForm.setValue({
      cashOfficeCode: value,
      pymtMethodCode: '',
      pymtMethodDesc: '',
      startDate: '',
      endDate: ''
    });
    this.gs.getPaymentMethods()
      .subscribe(data => {
        //console.log(data);
        this.paymentMethods = data;
      })
  }

  showDetails(value, e) {    
    if (e.target.checked) {
      this.cashOfficeForm.setValue({
        cashOfficeCode: value.cashOfficeCode,
        cashOfficeDesc: value.cashOfficeDesc,
        branchCode: value.branchCode,
        branchName: value.branchName
      });      
    } else {
      this.clearForm();
    }
  }
  updateBranchName(event) {
    //this.allBranches.filter(app => app.abbrName == event.target.value);
    console.log(this.allBranches.filter(app => app.abbrName == event.target.value)[0]);
    this.cashOfficeForm.patchValue({
      branchName :this.allBranches.filter(app => app.abbrName == event.target.value)[0].companyName
    });    
  }
  updateAppDetails(event) {
    //filter is used to filter the array of objects based on a object property
    this.currApp = this.applications.filter(app => app.appId == event.target.value);
    console.log(this.currApp[0]);
    //patchValue is used to update only some of the form fields
    this.assignApplicationForm.patchValue({
      cashOfficeCode: this.assignApplicationForm.controls["cashOfficeCode"].value,
      applicationDesc: this.currApp[0].applicationDesc,
      startDate: this.gs.fromJsonDate(this.currApp[0].startDate),
      endDate: this.gs.fromJsonDate(this.currApp[0].endDate)
    });
  }
  updatePayMethodDetails(event) {
    //filter is used to filter the array of objects based on a object property 
    this.currPaymentMethod = this.paymentMethods.filter(app => app.payMethodId == event.target.value);

    //patchValue is used to update only some of the form fields
    this.assignPayMethodForm.patchValue({
      cashOfficeCode: this.assignPayMethodForm.controls["cashOfficeCode"].value,
      pymtMethodDesc: this.currPaymentMethod[0].payMethodDesc,
      startDate: this.gs.fromJsonDate(this.currPaymentMethod[0].creationDate),
      endDate: this.gs.fromJsonDate(this.currPaymentMethod[0].creationDate)
    });
  }
  clearForm() {
    this.cashOfficeForm.setValue({
      cashOfficeCode: '',
      cashOfficeDesc: '',
      branchCode: '',
      branchName: ''
    })
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.cashOffice.length, page,5);

    // get current page of items
    this.pagedItems = this.cashOffice.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  assignApplication(formValue) {
    this.http.post("http://192.168.1.158:9090/CashOffice-Test/api/assignAppToCashOffice", formValue.value)
      .subscribe((response) => {
        console.log(response);
      })
  }
  assignPaymentMenthod(formValue) {
    //console.log(formValue);
    this.http.post("http://192.168.1.158:9090/CashOffice-Test/api/asgnPaymentMethodToCO", formValue.value)
      .subscribe((response) => {
        console.log(response);
      })
  }
  
}
