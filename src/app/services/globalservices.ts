import { HttpClient, HttpEvent, HttpRequest ,HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GlobalServices {
  branches: any = {};
  constructor(private http: HttpClient) {

  }
  getApplications(){
    return this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/appSetUpDetails').map(res =>res);
  }
  
  getPaymentMethods(){
    return this.http.get('http://192.168.1.158:9090/CashOffice-Test/api/paymentMethod').map(res =>res);
  }
  getBranches() {
    return this.http.get("http://192.168.1.158:9090/CashOffice-Test/api/getBranches").map(res => res);
    // .subscribe(response => {
    //   console.log(response);
    //   this.branches=response;          
    // })

  }
  postFile(fileToUpload: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
 
    formdata.append('file', fileToUpload);
 
    const req = new HttpRequest('POST', '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    }); 
    return this.http.request(req);  
  }
  fromJsonDate(jDate): string {
    let tempDate:Date;
    if (jDate == null){
      tempDate =new Date();
    }else{
      tempDate=new Date(jDate);
    }
    const bDate:Date = tempDate;        
    return bDate.toISOString().substring(0, 10);  //Ignore time
  }
  toApiDate(bDate) {
    const apiDate: string = new Date(bDate).toUTCString();
    return apiDate;
  }
}