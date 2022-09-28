import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BudgetItem } from 'src/app/modal/budget-item';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Input() budgetItem : BudgetItem = {
    amount : '',
    description : '',
  };
  @Input() StylesType = 'addForm';

@Output() budgetItemsEvent = new EventEmitter<BudgetItem>();
// @Output() updateEventSubmit = new EventEmitter<BudgetItem>();
  constructor() {

   }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){


    this.budgetItemsEvent.emit(form.value);
    if (this.StylesType === "add-form") {

      form.reset();
    }
    // this.updateEventSubmit.emit(form.value);



  }
}
