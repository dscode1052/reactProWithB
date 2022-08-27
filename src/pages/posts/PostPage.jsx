import './postPage.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getPostPage, getPostAll } from '../../api/postService';
import PostCard from '../../components/postCard/PostCard';

const PostPage = () => {  
  const [postsAll, setPostsAll] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState([6]);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getPostAll().then(postsData => setPostsAll(postsData));
  });

  const postDetailHandler = (id) => {
    navigate(`/posts/${id}`);    
  }

  // Pagination
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  }

  const pages = [];
  for (let i = 1; i < Math.ceil(postsAll.length/itemsPerPage); i++) {
    pages.push(i);    
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postsAll.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map(number => {
    if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
      return (
        <li 
          key={number} 
          id={number} 
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handlePrebtn = () => {
    setCurrentPage(currentPage - 1);

    if((currentPage -1)%pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if(currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  return (
    <div className="pagination">
      <h1>Post List</h1>

      <div className="postPerPage">      
      {
        currentItems.length > 0 ?  
        currentItems.map((post) => (   
            <div key={post.id} className="container" onClick={() => postDetailHandler(post.id)}>
              <PostCard post={post} />   
            </div>
          ))          
        :
          <p>There is no posts</p>
      }  
      </div>

      <ul className="pageNumbers">
        <li>
          <button 
            onClick={handlePrebtn}
            disabled={currentPage === pages[0] ? true : false}  
          > pre </button>
        </li>
          {renderPageNumbers}
        <li>
          <button 
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length -1] ? true : false}  
          > next </button>
        </li>
      </ul>    
    </div>
  )
}

export default PostPage
