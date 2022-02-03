import React from "react";


type PostProps = {
	message: string,
}


const Post:React.FC<PostProps> = ({message}) => {
  return <div className="content__myPosts-item">{message}</div>;
};

export default Post;
