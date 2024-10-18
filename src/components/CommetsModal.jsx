// src/components/PostModal.jsx
import React from "react";
import "./assets/styles/PostModal.css"; // Asegúrate de crear este archivo CSS para el estilo del modal.

const PostModal = ({ post, comments, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>X</button>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <h4>Comentarios:</h4>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.body} - <i>{comment.email}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostModal;
