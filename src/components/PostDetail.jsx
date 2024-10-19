import React from 'react';
import { useParams } from 'react-router-dom';

const postDetails = {
  1: {
    title: 'Post sobre Mona Lisa',
    content: 'Detalles sobre la obra de arte...',
    comments: [
      { id: 1, text: 'Comentario sobre la Mona Lisa.' },
      { id: 2, text: 'Increíble pintura del Louvre.' }
    ]
  },
  2: {
    title: 'Post sobre el pueblo',
    content: 'Detalles sobre la obra de arte...',
    comments: [
      { id: 1, text: 'Gran escultura del Louvre.' }
    ]
  }
};

const PostDetail = () => {
  const { id } = useParams();
  const post = postDetails[id];

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Comentarios:</h3>
      <ul>
        {post.comments.map(comment => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
