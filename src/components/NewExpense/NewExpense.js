import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense=(props)=>
{
   
    const [isEdite,setIsedit]=useState(false);

    const saveHandler=(expenseData)=>
    {
        const expenseDataObj={
            ...expenseData,
            id:Math.random().toString()
        };
        props.addExpenses(expenseDataObj)
    };

    const showForm=()=>
    {
        setIsedit(true)
    }
    const stopEdit=()=>
    {
        setIsedit(false)
    }
   //                 passed as a value   oncancel={stopEdit} so we can use in the ExpenseForm

    return (<div className="new-expense">
            {!isEdite && <button onClick={showForm}>Add New Expense</button>}
            
            {isEdite &&  <ExpenseForm  onSaveExpense={saveHandler}  oncancel={stopEdit}/>}
        </div>)
}


export default NewExpense;