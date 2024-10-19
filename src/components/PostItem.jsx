import { useState } from 'react';
import CommentsModal from './CommetsModal';

const PostItem = ({ title, img, likes, comments, shares }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const addComment = (newComment) => {
    comments.push(newComment);
  };

  return (
    <div className="post-item">
      <img src={img} alt={title} className="post-image" />
      <h3>{title}</h3>
      <div className="post-footer">
        <button onClick={handleLike}>
          ❤️ {likeCount}
        </button>
        <span>💬 {comments.length}</span>
        <span>🔗 {shares}</span>
        <button onClick={toggleComments}>Ver comentarios</button>
      </div>
      {showComments && <CommentsModal comments={comments} addComment={addComment} />}
    </div>
  );
};

export default PostItem;
