import { Search } from '@/components/Products/Search';
import ProductsList from '@/components/Products/ProductsList';
import { Product } from '@/types';

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const products: Product[] = await req.json();

  return (
    <div className='grid grid-cols-4 gap-10'>
      <div className='col-span-2'>
        <div className='text-sm text-darkGray'>
          Showing 1–9 of 21 results
        </div>
      </div>
      <div className='text-right'>
        <select className='text-sm text-darkGray focus:ring-0'>
          <option value="0">Default sorting</option>
          <option value="1">Sort by popularity</option>
          <option value="2">Sort by average rating</option>
        </select>
      </div>
      <div className='col-span-3 mt-6'>
        <ProductsList products={products} />
      </div>
      <div>
        <Search />
      </div>
    </div>
  )
}


