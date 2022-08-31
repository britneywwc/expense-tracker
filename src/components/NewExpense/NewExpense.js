import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addExpenseFlag, setAddExpenseFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Call the self created function that is passed on parent (App.js)
    props.onAddNewExpense(expenseData);
  };

  const showExpenseForm = (event) => {
    event.preventDefault();
    setAddExpenseFlag(true);
  }

  const hideExpenseForm = (event) => {
    event.preventDefault();
    setAddExpenseFlag(false);
  }

  return (
    <div className="new-expense">
      {addExpenseFlag ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onButtonClick={hideExpenseForm}/>
      ) : (
        <div>
          <button className="new-expense__button" onClick={showExpenseForm}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
