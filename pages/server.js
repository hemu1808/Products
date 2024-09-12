const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Your MySQL username
  password: '',  // Your MySQL password
  database: 'shopdb'
});

// Verify the connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// GET: Fetch all products
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error fetching products');
    }
    res.json(results);
  });
});

// POST: Add a new product
app.post('/api/products', (req, res) => {
  const { title, price, description, image } = req.body;
  const query = 'INSERT INTO products (title, price, description, image) VALUES (?, ?, ?, ?)';
  db.query(query, [title, price, description, image], (err, result) => {
    if (err) {
      return res.status(500).send('Error adding product');
    }
    res.json({ id: result.insertId, title, price, description, image });
  });
});

// PUT: Update a product by ID
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const { title, price, description, image } = req.body;
  const query = 'UPDATE products SET title = ?, price = ?, description = ?, image = ? WHERE id = ?';
  db.query(query, [title, price, description, image, id], (err) => {
    if (err) {
      return res.status(500).send('Error updating product');
    }
    res.send('Product updated');
  });
});

// DELETE: Delete a product by ID
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM products WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).send('Error deleting product');
    }
    res.send('Product deleted');
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
