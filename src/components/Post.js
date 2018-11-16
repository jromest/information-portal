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
          {comments.length === 0 ? (
            <span>0 comments</span>
          ) : (
            comments.map((comment, index) => <span key={index}>{comment}</span>)
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
