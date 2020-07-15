import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}
      { comments.map(comment => {
        return (
          <Comment 
          key={ comments.id }
          comment = { comment } />
        )
      })}
    </div>
  );
};

export default Comments;
