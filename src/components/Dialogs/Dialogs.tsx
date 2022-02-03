import React from "react";
import DialogItem from "./DialogItem";
import styles from "./Dialogs.module.css";
import Message from "./Message";

const Dialogs: React.FC = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialog}>
        <p className={styles.dialogs__title}>Users Names</p>
        <DialogItem name="Inav" id={1} />
        <DialogItem name="Anton" id={2} />
        <DialogItem name="Viktor" id={3} />
        <DialogItem name="Ololoev" id={4} />
      </div>
      <div className={styles.messages}>
        Messages section
        <Message message="Hello" />
        <Message message='I"m fine' />
        <Message message="WTF" />
        <Message message="How are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
