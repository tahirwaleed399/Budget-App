import { Component } from '@angular/core';
import { BudgetItem } from './modal/budget-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BudgetApp';
  budgetItems :BudgetItem[]=[];
  totalBudget:number = 0;
  constructor() {
    let result = localStorage.getItem("budgetItems");
    if(result=== null){
      this.budgetItems = [];
    }else
    this.budgetItems = JSON.parse(result);
  this.calculateTotalBudget()

  }


  calculateTotalBudget(){
    this.totalBudget=0;
    console.log("Calculating");

    this.budgetItems.forEach((item)=>{
      console.log(this.totalBudget ,item.amount);

       this.totalBudget +=  +item.amount
     })
   }


  func(value:BudgetItem){
    this.budgetItems.push(value);
    localStorage.setItem("budgetItems",JSON.stringify(this.budgetItems));
  this.calculateTotalBudget()

    console.log(this.budgetItems);


  }
  setAfterDeleteEvent(budgetArray : any){
    console.log("SetBudgetItemsAfterDelete");

    this.budgetItems = budgetArray;
    localStorage.setItem("budgetItems",JSON.stringify(this.budgetItems));
  this.calculateTotalBudget()


  }
}
