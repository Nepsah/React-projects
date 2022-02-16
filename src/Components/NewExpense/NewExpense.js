import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showAddExpense = () => setShowForm(true);
  const hideAddExpense = () => setShowForm(false);

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showAddExpense}>Add New Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
