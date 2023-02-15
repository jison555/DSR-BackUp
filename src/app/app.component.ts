import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalCompComponent } from './modal-comp/modal-comp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormArray, NgForm } from '@angular/forms';
import { OnInit } from '@angular/core'
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'parallelProject';
  angForm!: FormGroup;
  isshowTable:boolean=false;
  data: any;

  constructor(private dialogRef:MatDialog){
  }

  ngOnInit(): void {
    {
      this.angForm = new FormGroup({
        rows: new FormArray([
          new FormGroup({
            subject: new FormControl(),
            desc: new FormArray([
              new FormControl()
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
addRowField() {
  this.rows.push(new FormGroup({
    subject: new FormControl(),
    desc: new FormArray([
      new FormControl()
    ])
  }));
}

removeRowField(index:number){
  this.rows.removeAt(index); 
}

addDesc(index:number){
  this.rowDesc(index).push(new FormControl())
}
removeDesc(idx:number,jdx:number) {
  this.rowDesc(idx).removeAt(jdx);
}

deleteNameField(index:number) {
  if(this.rows.length!==1) {
  this.rows.removeAt(index); 
  }
}

tableView() {
  this.isshowTable=true;
}

onFormSubmit(): void {
  console.log(this.angForm.value);
  this.isshowTable=true;
  this.data = this.angForm.value;
}
  openDialog(){
    console.log("from open dialog",this.angForm.value);
    this.dialogRef.open(ModalCompComponent,{
      data:this.angForm.value,
      height: '400px',
  width: '600px',
    });
  }


}
