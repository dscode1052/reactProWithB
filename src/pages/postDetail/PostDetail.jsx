import "./postDetail.scss";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getPostDetailPage } from "../../api/postService";

const PostDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [postDetail, setPostDetail] = useState({});
  // useContext and use Custom Hook
  // Dont handle any logic in page file
  const loadedData = [{ id: 6, title: "abc" }];
  useEffect(() => {
    const onLoadData = async () => {
      const result = await getPostDetailPage(id);
      console.log(result);
      setPostDetail(result.data);
    };
    if (loadedData[id] === undefined) {
      onLoadData();
    } else {
      setPostDetail(loadedData[id]);
    }
    // getPostDetailPage(id).then(post => setPostDetail(post))
  }, []);

  console.log({ postDetail });

  const onBackHandler = () => {
    navigate("/posts");
  };

  return (
    <div className="postDetail">
      <div className="postDetailContainer">
        <h2>{postDetail.title}</h2>
        <p>User ID: {postDetail.userId}</p>
        <p>Content: {postDetail.body}</p>
      </div>
      <button onClick={onBackHandler}>Back</button>
    </div>
  );
};

export default PostDetail;
