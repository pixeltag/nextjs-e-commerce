'use client'
import { Search } from '@/components/Products/Search';
import ProductsList from '@/components/Products/ProductsList';
import { Product } from '@/types';
import { PriceRange } from '@/components/Products/PriceRange';
import { Categories } from '@/components/Products/Categories';
import { RelatedProducts } from '@/components/Products/RelatedProducts';
import { Banner } from '@/components/Products/Banner';
import PageHead from '@/components/layout/PageHead';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState<string>('')
  const [price, setPrice] = useState<number[]>([0, 500]);
  const [sort, setSort] = useState<string>("0");
  const [categories, setCategories] = useState<{ id: number, title: string }[]>([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const req = await fetch("http://localhost:3000/api/search");
        const data = await req.json();
        setProducts(data);
      } catch (error) {
        console.log(error)
      }
    }

    const fetchCategories = async () => {
      try {
        const categoriesReq = await fetch("http://localhost:3000/api/categories");
        const data = await categoriesReq.json();
        setCategories(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct();
    fetchCategories();
  }, [])


  const filteredProducts = (): Product[] => {
    let data = products;

    if (search) {
      data = data.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (sort === '0') {
      return data;
    } else if (sort === '1') {
      data = data.sort((a, b) => {
        if (a.title < b.title)
          return -1;
        if (a.title > b.title)
          return 1;
        return 0;
      })
    } else if (sort === '2') {
      data = data.sort((a, b) => {
        if (a.title > b.title)
          return -1;
        if (a.title < b.title)
          return 1;
        return 0;
      })
    }

    if (price) {
      data = data.filter(product => product.price > price[0] && product.price < price[1])
    }
    return data;
  }


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
            <select className='text-sm text-darkGray focus:ring-0' onChange={(e) => setSort(e.currentTarget.value)} value={sort}>
              <option value="0">Default sorting</option>
              <option value="1">Ascending</option>
              <option value="2">Descending</option>
            </select>
          </div>
          <div className='col-span-3 mt-6'>
            <ProductsList products={filteredProducts()} />
          </div>
          <div>
            <Search onSearch={(e) => setSearch(e)} />
            <PriceRange price={price} onPriceChange={(e) => setPrice(e)} />
            <Categories categories={categories} />
            <RelatedProducts products={products} />
            <Banner />
          </div>
        </div>
      </div>
    </>
  )
}


