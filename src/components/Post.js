import React from "react";
import { ReactComponent as ThumbsUpSVG } from "../assets/thumbs-up.svg";

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
        <div className="o-flex o-flex--space-between likes">
          <ThumbsUpSVG
            onClick={handleLikeClick}
            fill={likes === 0 ? "none" : "#3b5998"}
            stroke={likes === 0 ? "currentColor" : "#6d84b4"}
          />
          <span className="number">{likes}</span>
        </div>
        <div className="comments" onClick={() => console.log("OK")}>
          <span>{comments.length} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
