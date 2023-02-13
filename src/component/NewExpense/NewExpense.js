import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props.onAddNewExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseDataHandler} />
    </div>
  );
};
