import PostItem from './PostItem';
import mona from '../assets/img/mona.jpeg';  // Importa la imagen desde la carpeta assets
import pueblo from '../assets/img/pueblo.jpeg';

const PostList = ({ posts }) => {
  const first15Posts = posts.slice(0, 15);  // Muestra los primeros 15 posts

  return (
    <div className="post-list">
      {first15Posts.map((post) => (
        <PostItem 
          key={post.id}
          title={post.title}
          img={post.imgPath}  // Pasamos la ruta de la imagen
          likes={post.likes}
          comments={post.comments}
          shares={post.shares}
        />
      ))}
    </div>
  );
};

export default PostList;
