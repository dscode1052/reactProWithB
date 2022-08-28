import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import postsRouter from './routes/posts.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/posts', postsRouter);

// app.use((req, res) => {
//   res.sendStatus(404);
// });

// app.use((err, req, res, next) => {
//   console.error(error);
//   res.sendStatus(500);
// });

/* Listening Port */
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});
