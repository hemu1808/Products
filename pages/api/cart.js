import { NextApiRequest, NextApiResponse } from 'next';

const cart = [];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(cart);
  } else if (req.method === 'POST') {
    const { product } = req.body;
    cart.push(product);
    return res.status(201).json(product);
  } else if (req.method === 'DELETE') {
    const { id } = req.query;
    const index = cart.findIndex((product) => product.id === parseInt(id));
    if (index !== -1) {
      cart.splice(index, 1);
      return res.status(200).json({ message: 'Product removed from cart successfully' });
    } else {
      return res.status(404).json({ error: 'Product not found in cart' });
    }
  }
}