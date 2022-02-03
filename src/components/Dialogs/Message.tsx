import React from "react";

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default Message;
