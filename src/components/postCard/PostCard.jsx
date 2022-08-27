import './postCard.scss';

const PostCard = ({post}) => {
  return (
    <div className="postCard">
      <p>{post.title}</p>
    </div>    
  )
}

export default PostCard
