import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Call the self created function that is passed on parent (App.js)
    props.onAddNewExpense(expenseData);

    setIsEditing(false);
  };

  const startEditingHandler = (event) => {
    setIsEditing(true);
  };

  const stopEditingHandler = (event) => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onButtonClick={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <div>
          <button className="new-expense__button" onClick={startEditingHandler}>
            Add New Expense
          </button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
