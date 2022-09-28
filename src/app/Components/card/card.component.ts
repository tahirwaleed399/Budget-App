import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/modal/budget-item';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
@Input('cardGettingitem') budgetItem :any;
@Output() sendBudgetItem = new EventEmitter<any>();
@Output() sendBudgetItemAfterUpdate = new EventEmitter<any>();
copyBudgetItem :any;
constructor(public dialog: MatDialog) {


}

ngOnInit(): void {
}
CallFunctions(event:any){
    this.copyBudgetItem = {...this.budgetItem};
if (event.target.classList.contains('cross')) {

  this.deleteItem();
}else{
  this.openModal();
}
  }

  openModal(){

    console.log("modal open");

    let dialogRef = this.dialog.open(DialogBoxComponent,{data : this.budgetItem});
    //  dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe((result)=>{
      // console.log(this.budgetItem);
      // console.log(result,this.copyBudgetItem);
      console.log(`new and old object is emittted`);
      let newObject = {
        old : this.copyBudgetItem,
        new : this.budgetItem
      }
      console.log(newObject);
      console.log("newObject");

      this.sendBudgetItemAfterUpdate.emit(newObject);

    });


  }
  deleteItem(){
console.log("deleteing");

    this.sendBudgetItem.emit(this.budgetItem);
  }
}
