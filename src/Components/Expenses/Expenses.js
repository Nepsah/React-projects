import React, { useState } from "react";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const yearChangeHandler = (yearSelect) => {
    setFilterYear(yearSelect);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedStart={filterYear}
          onChangeFilter={yearChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
