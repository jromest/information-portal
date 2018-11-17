import React from "react";

const Post = ({ post }) => {
  const { message, name, date, likes, comments } = post;
  return (
    <div className="o-container o-flex o-flex--column post-container">
      <div className="o-flex user">
        <div className="name">{name}</div>
        <div className="date">{date}</div>
      </div>
      <div className="message">{message}</div>

      <div className="o-flex actions">
        <div className="likes">{likes} likes</div>
        <div className="comments">
          <span>{comments.length} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
