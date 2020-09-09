import React from "react";
const Post = ({ title, body }) => {
  return (
    <div className="post-card">
      <div className="post-titile">{title}</div>
      <p>{body}</p>
    </div>
  );
};
export default Post;
