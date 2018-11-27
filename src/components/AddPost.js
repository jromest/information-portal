import React from "react";

const AddPost = ({ onChange, onClick }) => (
  <div className="form-container">
    <textarea onChange={onChange} />
    <button onClick={onClick}>Add</button>
  </div>
);

export default AddPost;
