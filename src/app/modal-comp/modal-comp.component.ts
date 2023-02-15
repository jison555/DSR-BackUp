import { Component,ElementRef,Inject, Input, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-modal-comp',
  templateUrl: './modal-comp.component.html',
  styleUrls: ['./modal-comp.component.css']
})
export class ModalCompComponent {

   @ViewChild('mytable', {static:false}) el!:ElementRef;

  ELEMENT_DATA = [{"subject": "1111","desc": "this is a good project"},
                    { "subject": "2222","desc": "hello ppl"}
                  ];

  @Input() item: any;
  displayedColumns: string[] = ['subject', 'desc'];
  dataSource:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
console.log("modal data",data);
this.dataSource=data.rows;

  }

  save(){
    console.log("hiii",this.el);
    var doc = new jsPDF('p','pt','letter');
    autoTable(doc,{ html: '#my_table',
    theme:'grid',
    columnStyles:{
      0:{
        cellWidth:180
      },
      1:{
        cellWidth:180
      }
    }
  });
    doc.save('table.pdf')


    // doc.html(this.el.nativeElement,{
    //   callback: (doc) =>{
    //     doc.save('demo.pdf');
    //   }
    // })
    
  }





  // ngOnInit(): void {
  //   this.dataSource=this.item.rows;
  //   console.log("item", this.item.rows);
  // }

}
