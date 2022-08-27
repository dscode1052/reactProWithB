import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router';
import { getPostAll } from '../../api/postService';
import PostCard from '../../components/postCard/PostCard';

const PostPage = () => {
  const [postDataAll, setPostDataAll] = useState([]);

  // const navigate = useNavigate();

  useEffect(() => {
    getPostAll();
  })

  // const postDetailHandler = () => {
  //   navigate(`/posts`)
  // }

  return (
    <div>
      {/* <div className="container" onClick={postDetailHandler}>
        <PostCard />
      </div>    */}

      <PostCard />         
    </div>
  )
}

export default PostPage
