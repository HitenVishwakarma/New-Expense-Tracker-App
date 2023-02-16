import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddNewExpense(expenseData);
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)}>Add Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={() => setIsEditing(false)}
          onSaveExpense={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
