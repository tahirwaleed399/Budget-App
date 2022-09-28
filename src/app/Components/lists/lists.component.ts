import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';
import { BudgetItem } from 'src/app/modal/budget-item';
@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
@Input('listGettingItems') budgetItems : BudgetItem[]=[];
@Output() setAfterDeleteEvent = new EventEmitter<any>();
constructor() { }

ngOnInit(): void {
  }

  DeleteItem(budgetItem:any){
    console.log( this.budgetItems.indexOf(budgetItem));

   this.budgetItems = this.budgetItems.filter((item,index)=>{
     return index !== this.budgetItems.indexOf(budgetItem);
    });
    this.setAfterDeleteEvent.emit(this.budgetItems);
    console.log("emitted");

    console.log(this.budgetItems);



  }
  setUpdateItem(oldAndNewItem:any){


    // let indexOfOld=0  ;
    this.budgetItems.forEach((item , i)=>{
      console.log(`checking`);

if (item.amount === oldAndNewItem.old.amount && item.description === oldAndNewItem.old.description) {
  console.log("Found that ");
item.amount = oldAndNewItem.new.amount ;
item.description = oldAndNewItem.new.description ;


}
   });




   this.setAfterDeleteEvent.emit(this.budgetItems);

  }
  IncomeExpenseShow(income:HTMLElement,expense:HTMLElement,btn:HTMLElement){
if(btn.innerText === "Show Expenses"){
  expense.classList.remove("hide");
  income.classList.add("hide");
  btn.innerText = "Show Incomes"
  btn.classList.add("is-success");
  btn.classList.remove("is-danger");
}else{
  btn.classList.add("is-danger");
  btn.classList.remove("is-success");
  income.classList.remove("hide");
  expense.classList.add("hide");
  btn.innerText = "Show Expenses"
}
  }
}
