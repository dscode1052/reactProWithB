import axios from 'axios';

export async function getPosts(req, res, next) {
  try {    
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)

    return res.status(200).json({success: true, data: posts});
  } catch (error) {
    console.error(error);
  }
}

export async function getPost(req, res, next) {
  const id = req.params.id;
  try {    
    const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.data)

  //  console.log({post});
    return res.status(200).json({success: true, post});
  } catch (error) {
    return res.status(400).send({success: false, message: error});
  }
}