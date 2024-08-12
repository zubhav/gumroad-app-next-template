import type { NextApiRequest, NextApiResponse } from 'next';
import GumroadApiClient from '@web-ninja/gumroad-node-sdk';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const accessToken = req.headers.authorization;

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const gumroadClient = new GumroadApiClient(accessToken);
    const productsResponse = await gumroadClient.getProducts();

    if (productsResponse.success) {
      return res.status(200).json(productsResponse);
    } else {
      return res.status(500).json({ error: "Could not fetch products" });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
