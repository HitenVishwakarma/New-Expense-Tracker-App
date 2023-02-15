import { useState } from "react";
import { Card } from "../card/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const cilckHanlder = () => {
    setTitle("Updated!");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.price}</div>
        </div>
        <button onClick={cilckHanlder}>Change title</button>
      </Card>
    </li>
  );
};
