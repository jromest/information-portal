import React from "react";

const AddPost = ({ onChange, onClick, hasNoPost, newPost, inComments }) => (
  <div className="post-form-container">
    <textarea
      className="text-input"
      rows={inComments ? "2" : "4"}
      onChange={onChange}
      value={newPost}
      placeholder={inComments ? "Write a comment..." : "Write a new post..."}
    />
    <button className="btn btn-primary" onClick={onClick} disabled={hasNoPost}>
      {inComments ? "Comment" : "Post"}
    </button>
  </div>
);

export default AddPost;
