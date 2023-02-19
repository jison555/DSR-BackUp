import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterContentInit,AfterViewInit  } from '@angular/core';
import { DSRServiceService } from '../dsrservice.service';
import {MatDialog} from '@angular/material/dialog';
import { ModalCompComponent } from '../modal-comp/modal-comp.component';
import { pdfReport } from '../PdfReport';

export class Expertise {
  // subject!: string;
  // desc!:String[];

}
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})

export class ManagementComponent {  
  displayedColumns: string[] = ['position','reportId', 'accountName', 'projectName', 'createdDate','Download'];
  dataSource:any;
  modalTableData: any;
  strIntoObj: any;

  constructor(private service:DSRServiceService,private dialogRef:MatDialog){
    console.log("manaement constructor");
    console.log(this.service.getAllReport().subscribe((data: any) => { 
      console.log("each data = ",data);
      this.dataSource=data;
    }))
  }
  download(idx:number){
   
   var str:string=this.dataSource.at(idx).reportJson;
   this.strIntoObj= JSON.parse(str);
   console.log("====",this.strIntoObj);
   
   this.modalTableData = this.strIntoObj;
     
    this.dialogRef.open(ModalCompComponent,{
      data:this.modalTableData,
      height: '800px',
      width: '800px',
    });
  }

}
