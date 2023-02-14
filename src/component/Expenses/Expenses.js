import { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FilteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getUTCFullYear().toString() === filteredYear;
  });
  // console.log(FilteredExpenses);

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />
      {FilteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.amount}
        />
      ))}
    </div>
  );
};
