import React from "react";
import Post from "./Post";

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
  },
  {
    id: 3,
    message:
      "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. The process of using filler text is sometimes called greeking, although the text itself may be nonsense, or largely Latin, as in Lorem ipsum.",
    name: "Admin",
    date: "November 16, 2018",
    likes: 15,
    comments: ["Ayus", "Nice"]
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
      <div className="o-container feed-container">
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
