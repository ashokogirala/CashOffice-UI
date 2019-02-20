import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaypointmasterService } from '../paypointmaster.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagerService } from '../../../services/index';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-paypoint',
  templateUrl: './paypoint.component.html'
})
export class PaypointComponent implements OnInit {

  paypointDetails: any;
  pager: any={};
  pagedItems: any=[];
  public onClose: Subject<any>;
  constructor(private ppservice: PaypointmasterService, 
    private bsModalRef: BsModalRef, private pagerService: PagerService) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.ppservice.getPayPointDetails().subscribe(
      response => {        
        this.paypointDetails = response;
        this.setPage(1);
      },
      error => {
        alert("Error at fetching paypoint details");
      }
    )
  }
  public populateDetails(ppId, ppName) {
    this.onClose.next(this.paypointDetails.filter(app => app.payPointId==ppId));
    this.bsModalRef.hide() ;      
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.paypointDetails.length, page, 10);

    // get current page of items
    this.pagedItems = this.paypointDetails.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
