// User Management - Admin Module 

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PagerService, GlobalServices } from './../../services/index';

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule
    // ,  HttpClient, HttpHeaders
  ]
})

@Component({
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {
  constructor(private http: HttpClient,private pagerService: PagerService){}
  userInput = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    enabled: new FormControl(''),
    branchName: new FormControl('', Validators.required
    )
  }) ;

  groupInput = new FormGroup({
    username: new FormControl({value:'', disabled:true}), //Validators.required),
    firstName: new FormControl({value:'', disabled:true}),
    lastName: new FormControl({value:'', disabled:true}),
    groupName: new FormControl('', Validators.required),
    groupDesc: new FormControl({value:'', disabled:true}),
    enabled: new FormControl({value:'', disabled:true}),
  }) ;

  viewUserGroups = false ;
  viewUserMgt = true ;
  users:any;
  pager: any = {};
  pagedItems: any[];

  ngOnInit() {
    
    this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/admin/usermanagement")
      .subscribe((response) => {
        this.users = response;
        // for debugging purpose
        console.log(this.users[0]);
        this.setPage(1);
      });
    
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page, 10);

    // get current page of items
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  element(username,password,firstname,lastname) {
 
    console.log(firstname);        

    this.userInput.patchValue({
      username:username,
      password:password,
      lastName:lastname,
      firstName:firstname,
      
    })
 }
  
 
 assignGroup(){
    this.viewUserMgt = false ;
    this.viewUserGroups = true ; 
    this.userInput.disable() ;

    // other assignGroup code here
  }

  clear(){
    this.userInput.reset() ;
  }

  clearUserGroups(){
    this.groupInput.reset() ;
  }

  exit(){
    // Re-direct to app landing page
    window.location.href = "http://localhost:4200/#/dashboard" ;
  }

  exitUserGroups(){
    this.viewUserGroups = false ;
    this.viewUserMgt = true ;

    this.userInput.enable() ;
  }

  search(value){
    let cashier=this.users.filter(app => app.firstName == value);
    if(cashier.length != 0){
      this.userInput.patchValue({
        userName: cashier[0].username,
        password: cashier[0].password,
        lastName: cashier[0].lastName,
        firstName: cashier[0].firstName
       
      });
    }else{
      alert("No user exits with that first name "+value);
    }    
  }

 
  reset(){
    this.userInput.patchValue({
      userName:'',
      password:'',
      lastName:'',
      firstName:'',
      
    })
  }

  save(){}

  saveUserGroups(){}

  // Array to hold dynamic data - Users
  // users = [
  //   { username: "ioamu", password: "ioamu221", firstName: "Yioagos", lastName: "Avraamu", enabled: "false"},
  //   { username: "amios", password: "amios332", firstName: "Avram", lastName: "Tarasios", enabled: "true"},
  //   { username: "inard", password: "inard2341", firstName: "Quitin", lastName: "Edward", enabled: "false"}
  // ]

  // Array to hold dynamic data - User Groups
  userGroups = [
    { groupName: "CAS", groupDesc: "Cashier", firstName: "Yioagos", lastName: "Avraamu", enabled: "false"},
    { groupName: "SRC", groupDesc: "Senior Cashier", firstName: "Avram", lastName: "Tarasios", enabled: "true"},
    { groupName: "CAS", groupDesc: "Cashier", firstName: "Quitin", lastName: "Edward", enabled: "false"}
  ]

  // Array to hold dynamic data - Assignee
  assignee = {usn: "jhnvn", fsn: "John", lsn: "von Neumann",  gpn: "SRC", gds: "Senior Cashier", enb: 'true'} ;
}
