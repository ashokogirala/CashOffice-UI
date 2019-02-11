import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { GlobalServices } from "../../services";
import { HttpEventType, HttpResponse } from "@angular/common/http";

@Component({
    templateUrl: 'debitfile-template-assignment.component.html'
})
export class DebitfileTemplateAssignmentComponent {
    dbtFileTmpltAssignment :FormGroup;
    progress: { percentage: number } = { percentage: 0 };
   constructor(private gs:GlobalServices){
    this.dbtFileTmpltAssignment=new FormGroup({
           ppId:new FormControl(),
           ppName:new FormControl(),
           ppAttributeId :new FormControl(),
           ppAttributeDesc :new FormControl(),
           selectTemplate:new FormControl(),
           pensionOnly:new FormControl(),
           otherPremium:new FormControl()

       })
   }
   fileToUpload: File = null;
   handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload);
}
uploadFile() {
    this.progress.percentage = 0;
    this.gs.postFile(this.fileToUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    },error => {
        console.log(error);
      });
 
    this.fileToUpload = undefined;
  }
    // reprintReceipt = new FormGroup({}) ;
    onSubmit(){
        console.log(this.dbtFileTmpltAssignment.value) ; 
        //need to call file upload service here
    }
    viewReport(){
      // this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
      console.log('Receipt No. ' + this.dbtFileTmpltAssignment.value) ;
     }
     exitReport(){
      // this.receiptNumber.setValue('R' +  this.receiptNumber.value ) ;
      console.log('Exit Report') ;
     }
}