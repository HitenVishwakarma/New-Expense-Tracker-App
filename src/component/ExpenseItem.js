import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseItem date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
};
