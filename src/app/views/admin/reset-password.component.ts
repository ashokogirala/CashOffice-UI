// Reset Password - Admin Module

import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  imports: [
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule
  ]
})

@Component({
  templateUrl: 'reset-password.component.html'
})
export class ResetPasswordComponent {

  userInput = new FormGroup({
    username: new FormControl(''), //Validators.required),
    firstName: new FormControl({value: '', disabled: true }),
    lastName: new FormControl({value: '', disabled: true })
  }) ;

  clear(){
    this.userInput.reset() ;
  }

  exit(){
    // Re-direct to app landing page
    window.location.href = "http://localhost:4200/#/dashboard" ;
  }

  reset(){}

}
