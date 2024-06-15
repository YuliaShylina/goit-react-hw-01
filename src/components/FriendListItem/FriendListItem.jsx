import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline }) => {
  const classes = clsx(isOnline ? [css.green] : [css.red]);

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={classes}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
