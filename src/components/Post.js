import React from "react";
import { Link } from "@reach/router";
import { ReactComponent as ThumbsUpSVG } from "../assets/thumbs-up.svg";

class Post extends React.Component {
  state = {
    animation: false,
    isFeed: this.props.isFeed
  };

  componentDidMount() {
    const elm = this.refs.like;
    elm.addEventListener("animationend", this.animationDone);
  }

  componentWillUnmount() {
    const elm = this.refs.like;
    elm.removeEventListener("animationend", this.animationDone);
  }

  animationDone = () => {
    this.setState({ animation: false });
  };

  render() {
    const {
      post: { id, message, name, date, likes, comments },
      handleLikeClick
    } = this.props;
    const { animation, isFeed } = this.state;
    return (
      <div className="o-container o-flex o-flex--column post-container">
        {isFeed ? (
          <Link to={`post/${id}`} className="link">
            <PostContent content={{ name, date, message }} />
          </Link>
        ) : (
          <PostContent content={{ name, date, message }} />
        )}

        <div className="o-flex actions">
          <div className="o-flex o-flex--space-between likes">
            <div
              ref="like"
              onClick={() => this.setState({ animation: true })}
              className={animation ? "pulse" : ""}
            >
              <ThumbsUpSVG
                onClick={handleLikeClick}
                fill={likes === 0 ? "none" : "#3b5998"}
                stroke={likes === 0 ? "currentColor" : "#6d84b4"}
              />
            </div>
            <span className="number">{likes}</span>
          </div>

          {isFeed ? (
            <Link to={`post/${id}`} className="link">
              <PostComment commentCount={comments.length} />
            </Link>
          ) : (
            <PostComment commentCount={comments.length} />
          )}
        </div>
      </div>
    );
  }
}

const PostContent = ({ content }) => (
  <React.Fragment>
    <div className="o-flex user">
      <div className="name">{content.name}</div>
      <div className="date">{content.date}</div>
    </div>
    <div className="message">{content.message}</div>
  </React.Fragment>
);

const PostComment = ({ commentCount }) => (
  <div className="comments">{`${commentCount} comment${
    commentCount === 1 ? "" : "s"
  }`}</div>
);

export default Post;
