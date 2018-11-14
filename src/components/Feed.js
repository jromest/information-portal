import React from "react";
import Post from "./Post";

import style from "../styles/components/feed.module.scss";

const samplePosts = [
  {
    id: 1,
    message: "Hello World!",
    name: "Juan dela Cruz",
    date: "November 13, 2018",
    likes: 0,
    comments: []
  },
  {
    id: 2,
    message: "Lorem ipsum sa inyong lahat!",
    name: "Maria Santos",
    date: "November 14, 2018",
    likes: 5,
    comments: []
  }
];

class Feed extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: samplePosts });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className={style.container}>
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )}
      </div>
    );
  }
}

export default Feed;
