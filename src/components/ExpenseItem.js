import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "./card";
import { useState } from "react";

const  ExpenseItem=(props)=> {

  // const [title,setTile]=useState(props.title);
  
  // const clickhandler=()=>
  // {
  //   //it will rerender or call this instance again 
  //         setTile('updated')
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate s={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickhandler}>click Me</button> */}
    </Card>
  );
}

export default ExpenseItem;
