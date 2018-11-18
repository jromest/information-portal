import React from "react";

const Post = props => {
  const {
    post: { message, name, date, likes, comments },
    handleLikeClick
  } = props;
  return (
    <div className="o-container o-flex o-flex--column post-container">
      <div className="o-flex user">
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
      <div className="message">{message}</div>

      <div className="o-flex actions">
        <div className="likes">
          <button onClick={handleLikeClick}>{likes}</button>
          like
          {likes === 1 ? "" : "s"}
        </div>
        <div className="comments">
          <span>{comments.length} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
