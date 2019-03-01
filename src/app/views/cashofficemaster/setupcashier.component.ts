import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { CreateCashier } from './CreateCashier.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagerService, GlobalServices } from './../../services/index';
import { apiURL } from '../../_nav';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  templateUrl: 'setupcashier.component.html'
})
export class SetUpCashierComponent {
  cashiers: any;
  users:any;
  allBranches: any;
  pager: any = {};
  pagedItems: any[];
  createCashier: FormGroup;
  constructor(private http: HttpClient, private pagerService: PagerService, private gs: GlobalServices) {
    this.createCashier = new FormGroup(
      {
        cashierCode: new FormControl('',Validators.required),
        cashierName: new FormControl('',Validators.required),
        loginId: new FormControl('Please Select',Validators.required),
        branchCode: new FormControl('Please Select',Validators.required),
        branchName: new FormControl()
      }
    );
  }
  ngOnInit() {
    this.http.get(apiURL +'/cashiers').subscribe(
      (response) => {
        //console.log(response);
        this.cashiers = response;
        this.setPage(1);
      }
    );
    this.http.get(apiURL+'/getUsers').subscribe(
      (response) => {
        //console.log(response);
        this.users = response;        
      }
    );
    this.gs.getBranches()
      .subscribe(data => {
        this.allBranches = data
      });
  }
  onSubmit({ value, valid }: { value: CreateCashier, valid: boolean }) {
    //console.log(valid);
    if(valid){
    let obs = this.http.post(apiURL+'/cashiers/createCashier',this.createCashier.value)
    .subscribe(
        data => {
                  console.log(data);
                  alert("User created/updated successfully.");
                },
        error => {
                  alert("Error while creating new cashier with given details");
                  console.log('oops', error)
               }
    );
    }
  }
  updateBranchName(event) {
    this.createCashier.patchValue({
      branchName :this.allBranches.filter(app => app.abbrName == event.target.value)[0].companyName
    });    
  }
  search(value){
    let cashier=this.cashiers.filter(app => app.cashierCode == value.toUpperCase());
    if(cashier.length != 0){
      this.createCashier.patchValue({
        cashierCode: cashier[0].cashierCode,
        cashierName: cashier[0].cashierName,
        loginId: cashier[0].loginId,
        branchCode: cashier[0].branchCode,
        branchName: cashier[0].branchName
      });
    }else{
      alert("No Cashier exists with Cashier Code "+value);
    }    
  }
  clear(){
    this.createCashier.setValue({
      cashierCode: '',
      cashierName: '',
      loginId: 'Please Select',
      branchCode: 'Please Select',
      branchName: ''
    });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.cashiers.length, page, 10);

    // get current page of items
    this.pagedItems = this.cashiers.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
