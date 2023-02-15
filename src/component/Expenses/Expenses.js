import { useState } from "react";
import { ExpenseChart } from "./ExpenseChart";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";
import { ExpenseList } from "./ExpenseList";
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

  // let expenseContent = (
  //   <p className="no-data-available">No Expense available</p>
  // );

  // if (FilteredExpenses.length > 0) {
  //   expenseContent = FilteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       date={expense.date}
  //       price={expense.amount}
  //     />
  //   ));
  // }

  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterYearHandler}
      />
      <ExpenseChart />
      <ExpenseList item={FilteredExpenses} />
    </div>
  );
};
