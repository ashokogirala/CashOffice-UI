// User Management - Admin Module 

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  find(){}

  reset(){}

  save(){}

  saveUserGroups(){}

  // Array to hold dynamic data - Users
  users = [
    { username: "ioamu", password: "ioamu221", firstName: "Yioagos", lastName: "Avraamu", enabled: "false"},
    { username: "amios", password: "amios332", firstName: "Avram", lastName: "Tarasios", enabled: "true"},
    { username: "inard", password: "inard2341", firstName: "Quitin", lastName: "Edward", enabled: "false"}
  ]

  // Array to hold dynamic data - User Groups
  userGroups = [
    { groupName: "CAS", groupDesc: "Cashier", firstName: "Yioagos", lastName: "Avraamu", enabled: "false"},
    { groupName: "SRC", groupDesc: "Senior Cashier", firstName: "Avram", lastName: "Tarasios", enabled: "true"},
    { groupName: "CAS", groupDesc: "Cashier", firstName: "Quitin", lastName: "Edward", enabled: "false"}
  ]

  // Array to hold dynamic data - Assignee
  assignee = {usn: "jhnvn", fsn: "John", lsn: "von Neumann",  gpn: "SRC", gds: "Senior Cashier", enb: 'true'} ;
}
