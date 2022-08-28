import './postDetail.scss';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getPostDetailPage } from '../../api/postService';

const PostDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    getPostDetailPage(id).then(post => setPostDetail(post))
  },[id])

  const onBackHandler = () => {
    navigate('/posts');
  }

  return (
    <div className="postDetail">
      <div className="postDetailContainer">
        <h2>{postDetail.title}</h2>
        <p>User ID: {postDetail.userId}</p>
        <p>Content: {postDetail.body}</p>
      </div>
      <button onClick={onBackHandler}>Back</button>
    </div>
  )
}

export default PostDetail
