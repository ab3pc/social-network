import React from "react";
import Post from "./Post/Post";

const MyPosts:React.FC = () => {
  return (
    <div className="content__myPosts">
      My posts
      <div>
        <div>
          <textarea placeholder="Enter your message" />
        </div>
        <div>
          <button>Publish</button>
        </div>
      </div>
      <Post message='How are you?' />
      <Post message='Hello everybody'/>
      <Post message='I feel good'/>
    </div>
  );
};

export default MyPosts;
