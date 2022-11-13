import { ThemeContext } from "../../Theme";
import { useContext } from "react";
import classes from "./transaction.module.css";

const TransactionItem = ({ txId, user, date, cost }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={`${classes.trans} ${darkTheme ? classes.dark : ""}`}>
      <div>
        <p>{txId}</p>
        <p>{user}</p>
      </div>
      <div>{date}</div>
      <div>${cost}</div>
    </div>
  );
};

export default TransactionItem;
