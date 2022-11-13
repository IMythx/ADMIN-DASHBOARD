import classes from "./EventItem.module.css";
const EventItem = ({ title, subTitle }) => {
  return (
    <div className={classes["event-item"]}>
      <p>{title}</p>
      <p>{subTitle}</p>
    </div>
  );
};

export default EventItem;
