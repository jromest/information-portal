import React from "react";

const AddPost = ({ onChange, onClick, hasNoPost }) => (
  <div className="form-container">
    <textarea onChange={onChange} />
    <button onClick={onClick} disabled={hasNoPost}>
      Add
    </button>
  </div>
);

export default AddPost;
