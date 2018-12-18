import React from "react";

const AddPost = ({ onChange, onClick, hasNoPost }) => (
  <div className="form-container">
    <textarea onChange={onChange} />
    <button className="btn btn-primary" onClick={onClick} disabled={hasNoPost}>
      Post
    </button>
  </div>
);

export default AddPost;
