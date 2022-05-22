import Card from "./card";
import ExpensesFilter from "./Filter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList"
import { useState } from "react";
import ExpensesChart from "./Chart/ExpensesChart";

function Expenses(props) {
        const [filterYear,updatedFilter]=useState('2020');

        const changeEvent=(selectedYear)=>
        {
               updatedFilter(selectedYear)
        }

        const filteredExpenses=props.expensItem.filter(exp=>
          {
            return exp.date.getFullYear().toString()===filterYear
          })

        
        

  return (
    <div>
      
      <Card className="expenses">
      <ExpensesFilter  selectedyear={filterYear} selectChangeEvent={changeEvent}/>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
