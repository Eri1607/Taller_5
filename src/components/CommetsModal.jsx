import { useState } from 'react';

const CommentsModal = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments-modal">
      <h4>Comentarios</h4>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="Agregar un comentario" 
        />
        <button type="submit">Comentar</button>
      </form>
    </div>
  );
};

export default CommentsModal;
