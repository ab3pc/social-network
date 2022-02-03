import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

type DialogItemProps = {
  name: string;
  id: number;
};

const DialogItem: React.FC<DialogItemProps> = ({ name, id }) => {
  return (
    <div className={styles.dialog__item}>
      <NavLink className="dialog__item-link" to={`/dialogs/${id}`}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
