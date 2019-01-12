import React from "react";
import Post from "../components/Post";
import Comment from "../components/Comment";

class PostPage extends React.Component {
  state = {
    post: {
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
  };

  render() {
    const { post } = this.state;
    return (
      <div className="feed-container">
        <Post post={post} />
        {post.comments.length === 0
          ? ""
          : post.comments.map(({ id, name, date, comment }) => (
              <Comment key={id} name={name} date={date} comment={comment} />
            ))}
      </div>
    );
  }
}

export default PostPage;
