import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalServices } from '../../services/globalservices';
import { apiURL } from '../../_nav';


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
  currAppId: number;
  marked = false;
  applications: any;
  activities: any;
  setupAppActivity: FormGroup;
  constructor(private http: HttpClient, private gs: GlobalServices) {
    this.setupAppActivity = new FormGroup(
      {
        appCode: new FormControl('', Validators.required),
        appDesc: new FormControl('', Validators.required),
        appActivityCode: new FormControl(),
        appActivityDesc: new FormControl(),
        enabled: new FormControl(),
        appId: new FormControl()
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
  fetchActivities(appCode, appDesc, appId) {
    this.setupAppActivity.patchValue({
      appCode: appCode,
      appDesc: appDesc,
      appId: appId
    })
    this.http.get(apiURL + '/getActivities/' + appCode).subscribe(
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
    if (this.setupAppActivity.get('enabled').value == null || this.setupAppActivity.get('enabled').value == false) {
      this.setupAppActivity.controls['enabled'].setValue(0);
    } else {
      this.setupAppActivity.controls['enabled'].setValue(1);
    }
    //this.setupAppActivity.controls['appId'].setValue(this.currAppId);
    console.log(this.setupAppActivity);
    let obs = this.http.post(apiURL + '/saveActivity', this.setupAppActivity.value);
    obs.subscribe(response => {
      alert("Application/activity successfully saved");
      //console.log(response);
    }, error => {
      alert("Error while saving the Application/Activity");
    })
  }
  clear() {
    this.setupAppActivity.reset();
    this.activities=null;
  }
  search(value) {
    let appl = this.applications.filter(app => app.applicationCode == value.toUpperCase());
    this.fetchActivities(appl[0].applicationCode, appl[0].applicationDesc, appl[0].appId);
  }
}
