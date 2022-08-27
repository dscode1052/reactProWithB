import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostDetail from './pages/postDetail/PostDetail';
import PostPage from './pages/posts/PostPage';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NotFound from './pages/notFound/NotFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <div>
          <Header />

          <div className="body">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/posts" element={<PostPage />} />
              <Route exact path="/posts/:id" element={<PostDetail />} />
              <Route exact path="/forgetPassword" element={<ForgetPassword />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
