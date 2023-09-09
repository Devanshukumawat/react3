import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";

function Expenses() {
  const expenses= [
    {title: ' Toilet Paper', 
    amount: 555,
    date:  new Date(2021, 2, 28) },

    {title: ' Car Insurance', 
    amount: 28378.3,
    date:  new Date(2021, 3, 18) },

    {title: 'New Tv', 
    amount: 8378.3,
    date:  new Date(2021, 4, 8) },

    {title: ' Car Insurance', 
    amount: 3873.3,
    date:  new Date(2021, 5, 28) }

  ]
  
    return (
    <Card className="expenses">
     <ExpenseItem expense={expenses[0]}></ExpenseItem >
    <ExpenseItem expense={expenses[1]}></ExpenseItem >
    <ExpenseItem expense={expenses[2]}></ExpenseItem >
    <ExpenseItem expense={expenses[3]}></ExpenseItem >
    </Card>
    );
}

export default Expenses;