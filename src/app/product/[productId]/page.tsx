"use client"
import PageHead from '@/components/layout/PageHead';
import { Product } from '@/types';
import { currencyFormat } from '@/utilities';
import React, { use } from 'react'

import QuantityCounter from '@/components/Products/QuantityCounter';
import ImageSlider from '@/components/Products/ImageSlider';
import ProductTabs from '@/components/Products/ProductTabs';
import ProductsList from '@/components/Products/ProductsList';

async function fetchProduct(productId: string | null) {
    try {
        const req = await fetch(`http://localhost:3000/api/product?id=${productId}`, { cache: 'no-store' });
        const product: Product = await req.json();
        return product;
    } catch (error) {
        throw error
    }
}

async function fetchRelatedProducts() {
    try {
        const req = await fetch(`http://localhost:3000/api/search`);
        const products: Product[] = await req.json();
        return products.slice(0, 3);
    } catch (error) {
        throw error
    }
}

function Page(props: any) {
    const product = use(fetchProduct(props.params.productId));
    const RelatedProducts = use(fetchRelatedProducts());

    return (
        <>
            <PageHead title={product.title} />
            <div className="items-center mx-auto max-w-screen-xl py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-0">
                    <div>
                        <ImageSlider images={product?.images} />
                    </div>
                    <div>
                        <div>
                            <h3 className='uppercase font-bold text-xl tracking-wider mb-8'>{product.title}</h3>
                            <span className='bg-blue text-white px-6 py-1.5 mt-4'>{currencyFormat(product.price)}</span>
                            <span className='px-6 py-1.5 mt-4 line-through'>{currencyFormat(product.price)}</span>
                            <p className='mt-8 text-sm'>{product.desription.substring(0, 200)}</p>
                        </div>
                        <div className='flex mt-12'>
                            <QuantityCounter />
                            <div>
                                <button className='uppercase font-medium text-lg border-2 px-8 py-2 m-4 ms-8 hover:bg-black hover:text-white'>Add to cart</button>
                            </div>
                        </div>

                        <div>
                            <ul className='text-sm mt-12'>
                                <li className='mb-4'>
                                    <span className='font-bold uppercase me-2'>SKU:</span><span>{product.sku}</span>
                                </li>
                                <li className='mb-4'>
                                    <span className='font-bold uppercase me-2'>CATEGORIES:</span><span>{product.categories && product.categories.map((category, idx) => (<span key={idx}>{idx > 0 && ", "}{category}</span>))}</span>
                                </li>
                                <li className='mb-4'>
                                    <span className='font-bold uppercase me-2'>tags:</span><span>{product.tags && product.tags.map((tag, idx) => (<span key={idx}>{idx > 0 && ", "}{tag}</span>))}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='mt-24 p-8 md:p-0'>
                    <ProductTabs product={product} />
                </div>
                <div className='mt-28 mb-28 p-8 md:p-0'>
                    <ProductsList products={RelatedProducts} />
                </div>
            </div>
        </>
    )
}

export default Page;
