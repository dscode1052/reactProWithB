import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail/PostDetail';
import PostPage from './pages/posts/PostPage';
<<<<<<< HEAD
import Home from './pages/home/Home';
=======
>>>>>>> 28376fd381e82315fa6874655902b3ae56aa4686

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Home />} />
=======
>>>>>>> 28376fd381e82315fa6874655902b3ae56aa4686
          <Route exact path="/posts" element={<PostPage />} />
          <Route exact path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
