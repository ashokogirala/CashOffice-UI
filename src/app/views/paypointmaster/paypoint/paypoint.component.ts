import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaypointmasterService } from '../paypointmaster.service';

@Component({
  selector: 'app-paypoint',
  templateUrl: './paypoint.component.html',
  styleUrls: ['./paypoint.component.scss']
})
export class PaypointComponent implements OnInit {

  paypointDetails :any;
  constructor(private ppservice:PaypointmasterService) { }

  ngOnInit() {
    this.ppservice.getPayPointDetails().subscribe(
      data =>{
        this.paypointDetails=data;
      },
      error =>{
        alert("Error at fetching paypoint details");
      }  
    )
  }

}
