import React, { useEffect, useState, Fragment } from "react";
import Posts from "./Posts";

const BlogPage = () => {
  const [limit, setLimit] = useState(5);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);
  return (
    <Fragment>
      {loading ? <h2>loading...</h2> : <Posts posts={posts} />}
      <div style={{ textAlign: "center" }}>
        <button
          className="load-more-btn"
          onClick={() => {
            setLimit((current) => current + 5);
          }}
        >
          LOadMore..
        </button>
      </div>
    </Fragment>
  );
};
export default BlogPage;
