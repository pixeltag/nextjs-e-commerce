
import { ProductCard } from './ProductCard';
import { Product } from '@/types';

const ProductsList = ({ products }: { products: Product[] }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                products.map((product: Product) => <ProductCard {...product} key={product.id} />)
            }
        </div>
    )
}

export default ProductsList;