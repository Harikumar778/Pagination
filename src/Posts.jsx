function Posts({ posts, loading, query }) {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <ul className="list-group mb-4">
        {posts
          .filter((val) => {
            if (query === "") {
              return val;
            } else if (val.title.toLowerCase().includes(query.toLowerCase())) {
              return val;
            }
          })
          .map((post) => (
            <li className="list-group-item" key={post.id}>
              {post.title}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Posts;
