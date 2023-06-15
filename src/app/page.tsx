import { Search } from '@/components/Products/Search';
import ProductsList from '@/components/Products/ProductsList';
import { Product } from '@/types';
import { PriceRange } from '@/components/Products/PriceRange';
import { Categories } from '@/components/Products/Categories';
import { RelatedProducts } from '@/components/Products/RelatedProducts';
import { Banner } from '@/components/Products/Banner';
import PageHead from '@/components/layout/PageHead';

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const products: Product[] = await req.json();

  const categoriesReq = await fetch("http://localhost:3000/api/categories");
  const categories: Array<{ id: number, title: string }> = await categoriesReq.json();

  return (
    <>
      <PageHead title="SURFING" />
      <div className="items-center mx-auto max-w-screen-xl py-20">
        <div className='grid grid-cols-1 lg:grid-cols-4 px-16 lg:px-0 gap-10'>
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
            <PriceRange />
            <Categories categories={categories} />
            <RelatedProducts products={products} />
            <Banner />
          </div>
        </div>
      </div>
    </>
  )
}


