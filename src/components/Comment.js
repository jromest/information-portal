import React from 'react'

const Comment = ({name, date, comment}) => (
  <div>
    <div className="o-flex">
      <div className="name">{name}</div>
      <div className="date">{date}</div>
    </div>
    <div className="comment">{comment}</div>
  </div>
)

export default Comment;
