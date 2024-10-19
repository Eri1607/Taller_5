import React from 'react';
import PostList from './components/PostList';
import mona from './assets/img/mona.jpeg';  // Importa las imágenes
import pueblo from './assets/img/pueblo.jpeg';
import aquiles from './assets/img/aquiles.jpg';
import buenaventura from './assets/img/buenaventura.webp';
import cana from './assets/img/cana.jpg';
import cristo from './assets/img/cristo.jpg';
import encajera from './assets/img/encajera.jpg';
import esfinge from './assets/img/esfinge.jpg';
import fuente_diana from './assets/img/fuente_diana.jpg';
import grito from './assets/img/grito.jpg';
import marte_venus from './assets/img/marte_venus.jpg';
import medusa from './assets/img/medusa.jpg';
import milo from './assets/img/milo.jpg';
import napoleon from './assets/img/napoleon.jpg';
import samotracia from './assets/img/samotracia.webp';


const App = () => {
  const posts = [
    {
      id: 1,
      title: 'La Mona Lisa',
      imagePath: mona,  // Usamos la imagen importada
      likes: 277,
      comments: ['Comentarios'],
      shares: 45,
    },
    {
      id: 2,
      title: 'La libertad del pueblo',
      imagePath: pueblo,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 3,
      title: 'samotracia',
      imagePath: samotracia,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 4,
      title: 'Aquiles',
      imagePath: aquiles,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 5,
      title: 'Buenaventura',
      imagePath: buenaventura,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 6,
      title: 'bodas de cana',
      imagePath: cana,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 7,
      title: 'Cristo',
      imagePath: cristo,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 8,
      title: 'Encajera',
      imagePath: encajera,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 9,
      title: 'esfinge',
      imagePath: esfinge,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 10,
      title: 'La fuente de Diana',
      imagePath: fuente_diana,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 11,
      title: 'El grito',
      imagePath: grito,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 12,
      title: 'marte y venus',
      imagePath: marte_venus,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 13,
      title: 'Medusa',
      imagePath: medusa,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 14,
      title: 'Milo',
      imagePath: milo,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    {
      id: 15,
      title: 'Coronacion Napoleon',
      imagePath: napoleon,  // Usamos la imagen importada
      likes: 196,
      comments: ['Comentarios'],
      shares: 12,
    },
    //  agregar más posts
  ];

  return (
    <div className="app">
      <h1>Lista de Publicaciones</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default App;
