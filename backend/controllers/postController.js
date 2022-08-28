import axios from 'axios';
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"

export async function getPosts(req, res, next) {
  try {    
    const posts = await axios.get('posts')
      

    return res.status(200).json({success: true, data: posts.data});
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(req, res, next) {
  const id = req.params.id;
  try {    
    const post = await axios.get(`posts/${id}`)


  //  console.log({post});
    return res.status(200).json({success: true, data: post.data});
  } catch (error) {
    return res.status(400).send({success: false, message: error});
  }
}