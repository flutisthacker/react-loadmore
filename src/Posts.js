import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <div classname="post-lisiting">
      {posts.map((post) => {
        return <Post key={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};

export default Posts;
