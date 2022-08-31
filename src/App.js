import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Arrow function
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 294.76,
      date: new Date(2021, 3, 10),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 1200.59,
      date: new Date(2021, 4, 14),
    },
    {
      id: "e4",
      title: "Gaming Setup",
      amount: 5325.28,
      date: new Date(2021, 5, 12),
    },
  ];


  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddNewExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
