import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  // selector: 'app-user-management',
  templateUrl: './user-management.component.html'
})
export class UserManagementComponent {

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
}
