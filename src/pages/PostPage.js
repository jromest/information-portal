import React from "react";
import Post from "../components/Post";
import Comment from "../components/Comment";

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
    comments: [
      {
        id: 1,
        name: "Ana marie",
        date: "November 23, 2018",
        comment: "Ayus!"
      },
      {
        id: 2,
        name: "Marco Luis",
        date: "November 23, 2018",
        comment: "Nice!"
      }
    ]
  }
];

class PostPage extends React.Component {
  state = {
    post: null
  };

  componentDidMount() {
    const { postId } = this.props;
    this.setState({
      post: samplePosts.find(i => i.id.toString() === postId)
    });
  }

  updateLike = () => {
    const { post } = this.state;
    post.likes = post.likes + 1;
    this.setState({ post });
  };

  render() {
    const { post } = this.state;
    return (
      <div className="o-container feed-container">
        {post ? (
          <React.Fragment>
            <Post
              post={post}
              handleLikeClick={() => {
                this.updateLike();
              }}
            />
            {post.comments.length === 0
              ? ""
              : post.comments.map(({ id, name, date, comment }) => (
                  <Comment key={id} name={name} date={date} comment={comment} />
                ))}
          </React.Fragment>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default PostPage;
