import { useState, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [accessToken] = useLocalStorage<string | null>('accessToken', null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products', {
                    headers: {
                        'Authorization': accessToken || '',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json() as {products: Product[]};
                setProducts(data.products);
            } catch (err) {
                setError('Error fetching products');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (accessToken) {
            fetchProducts();
        }
    }, [accessToken]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Your Products</h1>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}
