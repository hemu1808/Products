let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return list of products
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    // Add new product
    const { name, price } = req.body;
    const newProduct = { id: Date.now(), name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
  } else if (req.method === 'PUT') {
    // Edit a product
    const { id, name, price } = req.body;
    products = products.map((product) => (product.id === id ? { ...product, name, price } : product));
    res.status(200).json({ message: 'Product updated' });
  } else if (req.method === 'DELETE') {
    // Delete a product
    const { id } = req.body;
    products = products.filter((product) => product.id !== id);
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
