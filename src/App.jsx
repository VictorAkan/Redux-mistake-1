// import React from 'react';
import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App pb-32">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
