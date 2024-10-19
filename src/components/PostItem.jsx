import React, { useState, useEffect } from 'react';

const PostItem = ({ id, title, body, likes, shares }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
    if (!showComments) {
      // Solo cargamos los comentarios si no están visibles aún
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data => setComments(data));
    }
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment = {
        postId: id,
        body: newComment,
        id: comments.length + 1,
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="post-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="post-footer">
        <button onClick={handleLike}>
          ❤️ {likeCount}
        </button>
        <span>🔗 {shares}</span>
        <button onClick={toggleComments}>
          {showComments ? "Ocultar comentarios" : "Ver comentarios"}
        </button>
      </div>
      {showComments && (
        <div className="comments-section">
          <h4>Comentarios:</h4>
          {comments.length === 0 ? (
            <p>No hay comentarios aún.</p>
          ) : (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  {comment.body}
                </li>
              ))}
            </ul>
          )}
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Agregar un comentario"
          />
          <button onClick={handleAddComment}>Comentar</button>
        </div>
      )}
    </div>
  );
};

export default PostItem;
