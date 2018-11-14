import React from "react";

const Post = ({ post }) => {
  const { message, name, date, likes, comments } = post;
  return (
    <div className="o-container post-container">
      <h2>{message}</h2>
      <h6>{name}</h6>
      <p>{date}</p>
      <p>{likes} likes</p>
      {comments.length === 0 ? (
        <p>0 comments</p>
      ) : (
        comments.map((comment, index) => <p key={index}>{comment}</p>)
      )}
    </div>
  );
};

export default Post;
