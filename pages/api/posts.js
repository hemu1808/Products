let posts = [
    { id: 1, title: 'First Post', content: 'This is my first post' },
    { id: 2, title: 'Second Post', content: 'This is my second post' }
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(posts);
    } else if (req.method === 'POST') {
      const { title, content } = req.body;
      const newPost = { id: Date.now(), title, content };
      posts.push(newPost);
      res.status(201).json(newPost);
    } else if (req.method === 'DELETE') {
      const { id } = req.body;
      posts = posts.filter(post => post.id !== id);
      res.status(204).end();
    }
  }
  