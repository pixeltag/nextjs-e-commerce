'use client';
import { ProductCard } from './ProductCard';
import { Product } from '@/types';
import { useGlobalContext } from '@/context/store';

const ProductsList = ({ products }: { products: Product[] }) => {
    const { cart, setCart } = useGlobalContext();

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map((product: Product) => <ProductCard product={product} key={product.id} onAddToCart={(p) => setCart((prev) => [...prev, p])} />)
            }
        </div>
    )
}

export default ProductsList;