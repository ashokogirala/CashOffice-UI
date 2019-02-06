import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalServices } from '../../services/globalservices';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa("ashok:password")
  })
};

@Component({
    templateUrl: 'setupapplications.component.html'
  })
export class SetUpApplicationsComponent {
  currAppCode: string;
  currAppDesc: string;
  currAppId :number;
  marked = false;
  applications: any;
  activities: any;
  setupAppActivity: FormGroup;
  constructor(private http: HttpClient,private gs:GlobalServices) {
    this.setupAppActivity = new FormGroup(
      {
        appActivityCode: new FormControl(),
        appActivityDesc: new FormControl(),
        enabled: new FormControl(),
        appId :new FormControl()
      }
    )
  }
  ngOnInit() {
    this.gs.getApplications().subscribe(
      (data) => {
        console.log(data);
        this.applications = data;
      }
    );
  }
  fetchActivities(appCode, appDesc,appId) {
    this.currAppCode = appCode;
    this.currAppDesc = appDesc;
    this.currAppId = appId;
    this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/getActivities/' + appCode).subscribe(
      (response) => {
        console.log(response);
        this.activities = response;
      }
    );
  }
  addRow() {
    console.log("add activity");
    this.activities.push({
      code: "",
      desc: "",
      enabled: false
    });
  }

  saveActivity(value) {
    if (this.setupAppActivity.get('enabled').value == null||this.setupAppActivity.get('enabled').value == false) {
      this.setupAppActivity.controls['enabled'].setValue(0);
    }else{
      this.setupAppActivity.controls['enabled'].setValue(1);
    }
    this.setupAppActivity.controls['appId'].setValue(this.currAppId);
    console.log(this.setupAppActivity.value);
    let obs = this.http.post('http://192.168.1.158:9090/CashOffice-Test/api/saveActivity', this.setupAppActivity.value);
    obs.subscribe(response => {
      console.log(response);
    })
  }
}
