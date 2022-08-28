import "./postPage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getPostPage, getPostAll } from "../../api/postService";
import PostCard from "../../components/postCard/PostCard";

const PostPage = () => {
  const [postsAll, setPostsAll] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState([6]);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  // handle logics from customhook, and pass the from the useContext
  // Cache all data in FE, dont load duplicated data
  // you can just load the postsAll once, when you first time load the page.
  // you can just load the postDetail onece too, when you first time enter a post detail page.
  const navigate = useNavigate();

  useEffect(() => {
    const onLoadData = async () => {
      const result = await getPostAll();

      setPostsAll(result.data);
    };
    onLoadData();
  }, []);

  const postDetailHandler = (id) => {
    navigate(`/posts/${id}`);
  };

  // Pagination
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  // remove all these logics
  const pages = [];
  for (let i = 1; i < Math.ceil(postsAll?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // console.log({indexOfLastItem});
  // console.log({indexOfFirstItem});

  const currentItems = postsAll?.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = postsAll.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = Object.keys(postsAll).slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = Object.entries(postsAll).slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = Array.prototype.slice(postsAll.data, indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
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

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const { currentItems, handlebutton } = useContext(undefined);
  // add next/prev button into the detail page
  return (
    <div className="pagination">
      <h1>Post List</h1>

      <div className="postPerPage">
        {currentItems?.length > 0 ? (
          currentItems.map((post) => (
            <div
              key={post.id}
              className="container"
              onClick={() => postDetailHandler(post.id)}
            >
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <p>There is no posts</p>
        )}
      </div>

      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrebtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            {" "}
            pre{" "}
          </button>
        </li>
        {renderPageNumbers}
        {/* create new component for this */}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            {" "}
            next{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PostPage;
