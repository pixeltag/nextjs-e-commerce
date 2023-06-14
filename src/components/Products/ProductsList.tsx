
import { ProductCard } from './ProductCard';
import { Product } from '@/types';

const ProductsList = ({ products }: { products: Product[] }) => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                products.map((product: Product) => <ProductCard {...product} key={product.id} />)
            }
        </div>
    )
}

export default ProductsList;