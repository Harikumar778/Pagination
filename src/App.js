import { useEffect, useState } from "react";
import Posts from "./Posts";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoding] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoding(true);
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      const res = await data.json();
      setPosts(res);
      setLoding(false);
    };

    fetchData();
  }, []);

  const indexLastPost = currentpage * postPerPage;
  const indexFirstPost = indexLastPost - postPerPage;
  const currentPosts = posts.slice(indexFirstPost, indexLastPost);

  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-3">My Blog Posts</h2>
      <Posts posts={currentPosts} loading={loading} />
    </div>
  );
}
