import { useEffect, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import ExpenseForm from "./components/ExpenseForm";
import axios from "axios";


const App =()=>{
 const [expenses,SetExpenses] =useState([])

useEffect(() => {
  axios.get('https://expenses-api-isl3.onrender.com/')
  .then(res =>{
    console.log(res.data)
    SetExpenses(res.data)
  })
  .catch(err => console.log(err))

},[])












const addExpense = (title, amount) =>{
  const nextID = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1;
    SetExpenses([...expenses,{ id: nextID, title: title, amount: amount}])
}
const deleteExpense = (id) =>{
  SetExpenses(expenses.filter((exp) => exp.id !== id))
}
 let income=0, expense=0
 
 expenses.forEach((exp) =>{
  if(exp.amount > 0){
    income += exp.amount
  }
  else{
    expense += exp.amount
    
  }
 })
  return(
    <>
    <div>
  <div className="tracker"> Expense Tracker</div>
 
  <div className="income-expense-container">
  <div className="income">
  <span className="title">Income</span>
  <span>{income}</span>
  </div>
  <div className="block"></div>
  <div className="expense">
  <div className="title">Expense</div>
  <span>{expense}</span>
  
  </div>
  </div>
  <div className="balance"> Balance :{income+expense}</div>

  
  <ExpenseForm addExpense ={addExpense}  />
  </div>


   {expenses.map((expense) =>(
    <ExpenseItem key= {expense.id} title={expense.title} amount={expense.amount}id={expense.id} deleteExpense={deleteExpense}/>
    ))}

    
    </>
  )
}


export default App