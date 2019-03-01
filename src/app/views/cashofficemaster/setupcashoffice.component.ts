import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

import { PagerService, GlobalServices } from './../../services/index';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { apiURL } from '../../_nav';
@Component({
  templateUrl: 'setupcashoffice.component.html'
})
export class SetUpCashOfficeComponent {
  cashOfficeForm: FormGroup;
  assignApplicationForm: FormGroup;
  assignPayMethodForm: FormGroup;
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
  assignedpayMethods: any;
  paymentMethods: any;
  currPaymentMethod: any;
  constructor(private http: HttpClient, private pagerService: PagerService, private gs: GlobalServices) {
    this.cashOfficeForm = new FormGroup({
      cashOfficeCode: new FormControl('', Validators.required),
      cashOfficeDesc: new FormControl('', Validators.required),
      branchCode: new FormControl('', Validators.required),
      branchName: new FormControl()
    });
    this.assignApplicationForm = new FormGroup({
      cashOfficeCode: new FormControl(),
      applicationCode: new FormControl('', Validators.required),
      applicationDesc: new FormControl(),
      startDate: new FormControl(),
      endDate: new FormControl()
    });
    this.assignPayMethodForm = new FormGroup({
      cashOfficeCode: new FormControl(),
      pymtMethodCode: new FormControl('', Validators.required),
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
        console.log(data);
        this.paymentMethods = data;
      })
  }

  showDetails(value, e) {
    console.log(value);
    if (e.target.checked) {
      if (e.target.name == "coradio") {
        this.cashOfficeForm.setValue({
          cashOfficeCode: value.cashOfficeCode,
          cashOfficeDesc: value.cashOfficeDesc,
          branchCode: value.branchCode,
          branchName: value.branchName
        });
      } else if (e.target.name == "appRadio") {
        this.assignApplicationForm.patchValue({
          applicationCode: value.applicationCode,
          applicationDesc: value.applicationDesc,
          startDate: this.gs.fromJsonDate(value.startDate),
          endDate:this.gs.fromJsonDate(value.endDate)
        });
      }else if(e.target.name=="asgnPmRadio"){
        this.assignPayMethodForm.patchValue({
          pymtMethodCode :value.pymtMethodCode,
          pymtMethodDesc: value.pymtMethodDesc,
          startDate: this.gs.fromJsonDate(value.startDate),
          endDate: this.gs.fromJsonDate(value.endDate)
        });
      }
    } else {
      this.clearForm();
    }
  }
  updateBranchName(event) {
    //this.allBranches.filter(app => app.abbrName == event.target.value);
    //console.log(this.allBranches.filter(app => app.abbrName == event.target.value)[0]);
    this.cashOfficeForm.patchValue({
      branchName: this.allBranches.filter(app => app.abbrName == event.target.value)[0].companyName
    });
  }
  updateAppDetails(event) {
    this.currApp = this.applications.filter(app => app.applicationCode == event.target.value);
    //console.log(this.currApp[0]);
    //patchValue is used to update only some of the form fields
    this.assignApplicationForm.patchValue({
      cashOfficeCode: this.assignApplicationForm.controls["cashOfficeCode"].value,
      applicationDesc: this.currApp[0].applicationDesc,
      startDate: this.gs.fromJsonDate(this.currApp[0].startDate),
      endDate: this.gs.fromJsonDate(this.currApp[0].endDate)
    });
  }
  updatePayMethodDetails(event) {
    console.log(event.target.value);
    //filter is used to filter the array of objects based on a object property 
    this.currPaymentMethod = this.paymentMethods.filter(app => app.payMethodCode == event.target.value);

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
  search(value) {
    let coDet = this.cashOffice.filter(co => co.cashOfficeCode == value.toUpperCase());
    if (coDet.length == 0) {
      alert("No cashoffice exists with given code");
    } else {
      this.cashOfficeForm.patchValue({
        cashOfficeCode: coDet[0].cashOfficeCode,
        cashOfficeDesc: coDet[0].cashOfficeDesc,
        branchCode: coDet[0].branchCode,
        branchName: coDet[0].branchName
      });
    }

  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.cashOffice.length, page, 5);

    // get current page of items
    this.pagedItems = this.cashOffice.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  onCoSubmit() {
    console.log(this.cashOfficeForm.value);
    this.http.post(apiURL + '/createCashOffice', this.cashOfficeForm.value).
      subscribe(response => {
        alert("successfully saved/updated cashoffice details");
        this.ngOnInit();
      }, error => {
        alert("failed to save/update cashoffice details");
      });
  }
  assignApplication(formValue) {    
    this.http.post(apiURL + '/assignAppToCashOffice', formValue.value)
      .subscribe(response => {
        alert("Application successfully assigned to CashOffice");
        this.showAssignApplication(formValue.value.cashOfficeCode);
        console.log(response);
      },error =>{
        alert("Error during assigning application to Cashoffice");
      })
  }
  assignPaymentMenthod(formValue) {
    //console.log(formValue);
    this.http.post(apiURL + '/asgnPaymentMethodToCO', formValue.value)
      .subscribe((response) => {
        alert("Payment method successfully assigned to CashOffice");
        this.showAssignPayMethod(formValue.value.cashOfficeCode);
        console.log(response);
      })
  }

}
