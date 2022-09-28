import { Component, OnInit , Inject, inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public clickedBudgetItem : any, public DiaoligRef : MatDialogRef<DialogBoxComponent>) {
  }


  ngOnInit(): void {

  }
  formSubmit(updatedItem:any){


    this.DiaoligRef.close(updatedItem);

  }
}
