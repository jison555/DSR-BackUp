import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormArray, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DSRServiceService } from '../dsrservice.service';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';


@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.css']
})
export class StatusReportComponent {

  title = 'parallelProject';
  angForm!: FormGroup;
  data: any;
  showSubTopic:boolean=false;
  modalTableData: any;

  constructor(private dialogRef:MatDialog,private service:DSRServiceService){
    console.log("status constructor");
    
    
  }

  ngOnInit(): void {
    {
      this.angForm = new FormGroup({
        rows: new FormArray([
          new FormGroup({
            subject: new FormControl('',Validators.required),
            desc: new FormArray([
              new FormGroup({
                discription: new FormControl(),
                subDesc: new FormArray([
                ])
              })
            ])
          })
        ])
      });
    }
}
get rows(): FormArray{
  return this.angForm.get('rows') as FormArray;
}
rowDesc(index:number):FormArray {
  return this.rows.at(index).get('desc') as FormArray;
}
subDesc(indexRow:number,indexDesc:number):FormArray {
  return this.rowDesc(indexRow).at(indexDesc).get('subDesc') as FormArray;
}
addRowField() {
  console.log(this.angForm);
  
  this.rows.push(new FormGroup({
    subject: new FormControl(),
    desc: new FormArray([
      new FormGroup({
        discription: new FormControl(),
        subDesc: new FormArray([
        ])
      })
    ])
  }));
}

removeRowField(index:number){
  this.rows.removeAt(index); 
}

addDesc(index:number){
console.log(this.rows.at(index));

  this.rowDesc(index).push(new FormGroup({
    discription: new FormControl(),
    subDesc: new FormArray([
    ])
  }))
}

addsubDesc(indexRow:number,indexDesc:number){
console.log(indexRow,indexDesc);


  this.showSubTopic=true;
  this.subDesc(indexRow,indexDesc).push(new FormControl());
}
removeDesc(idx:number,jdx:number) {
  this.rowDesc(idx).removeAt(jdx);
}

removeSubDesc(idx:number,jdx:number,subidx:number){
  this.subDesc(idx,jdx).removeAt(subidx);
}

deleteNameField(index:number) {
  if(this.rows.length!==1) {
  this.rows.removeAt(index); 
  }
}


onFormSubmit() {
  console.log("on submit",this.angForm.value);
  let val = this.angForm.value;
  this.service.saveReport(val).subscribe((data: any) => console.log("success"))

}

  openDialog(angForm:FormGroup){
   // debugger;
    console.log("from open dialog",angForm.value);
    console.log("from open dialog",this.angForm.value);
    this.modalTableData = angForm.value;
    console.log("testing",this.modalTableData);
    
    this.dialogRef.open(ModalCompComponent,{
      data:this.modalTableData,
      height: '800px',
      width: '800px',
    });
  }



}
