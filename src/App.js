import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail/PostDetail';
import PostPage from './pages/posts/PostPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <Routes>
          <Route exact path="/posts" element={<PostPage />} />
          <Route exact path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
