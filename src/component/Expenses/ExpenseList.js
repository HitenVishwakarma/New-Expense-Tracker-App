import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <div className="expenses-list__fallback">Found no expnses</div>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.amount}
        />
      ))}
    </ul>
  );
};
