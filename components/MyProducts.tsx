import { useState, useEffect } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import {useRouter} from 'next/router';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export function MyProducts() {
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

                const data = await response.json();
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
            <h1>My Products</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products found.</p>
            )}

            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => {
                localStorage.removeItem('accessToken');
                window.location.reload();
            }}>
                Sign out
            </button>
        </div>
    );
}
