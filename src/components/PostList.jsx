import React, { useState, useEffect } from 'react';
import PostItem from './PostItem';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Obtener los primeros 20 posts
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem 
          key={post.id} 
          id={post.id} 
          title={post.title} 
          body={post.body} 
          likes={Math.floor(Math.random() * 300)} 
          shares={Math.floor(Math.random() * 50)} 
        />
      ))}
    </div>
  );
};

export default PostList;
