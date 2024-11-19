import React from 'react';
import ShortsCard from './shortsCard';

const App = () => {
  // Sample video data (replace with your API data)
  const videos = [
    {
      thumbnail: 'https://via.placeholder.com/150',
      title: 'सिद्धू की होगी घर वापसी?',
    },
    {
      thumbnail: 'https://via.placeholder.com/150',
      title: 'मणिपुर में हाई टेंशन, 3 मंत्री, 6 MLA के घर हमला',
      },
      {
        thumbnail: 'https://via.placeholder.com/150',
        title: 'सिद्धू की होगी घर वापसी?',
      },
      {
        thumbnail: 'https://via.placeholder.com/150',
        title: 'सिद्धू की होगी घर वापसी?',
      },
      {
        thumbnail: 'https://via.placeholder.com/150',
        title: 'मणिपुर में हाई टेंशन, 3 मंत्री, 6 MLA के घर हमला',
      },
      {
        thumbnail: 'https://via.placeholder.com/150',
        title: 'सिद्धू की होगी घर वापसी?',
      },
      {
        thumbnail: 'https://via.placeholder.com/150',
        title: 'मणिपुर में हाई टेंशन, 3 मंत्री, 6 MLA के घर हमला',
      },
      {
      thumbnail: 'https://via.placeholder.com/150',
      title: 'सिद्धू की होगी घर वापसी?',
    },
    {
      thumbnail: 'https://via.placeholder.com/150',
      title: 'मणिपुर में हाई टेंशन, 3 मंत्री, 6 MLA के घर हमला',
    }
  ];

  return (
    <div className="App">
      <ShortsCard videos={videos} />
    </div>
  );
};

export default App;
