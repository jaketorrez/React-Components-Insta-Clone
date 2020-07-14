// You will add code to this file
import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';

const Post = props => {
  // Make sure the parent of Post is passing the right props!
  const { post, likePost } = props

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      <LikeSection
      likePost={() => likePost(post.id)}
      likeCount={ post.likes } />
      {/* Comments also wants its props! */}
      <Comments />
    </div>
  );
};

export default Post;
