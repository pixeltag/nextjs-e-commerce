"use client"
import PageHead from '@/components/layout/PageHead';
import { Product } from '@/types';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Page = async () => {
    const searchParams = useSearchParams();
    const productId = searchParams.get('id')

    const req = await fetch(`http://localhost:3000/api/product?id=${productId}`);
    const product: Product = await req.json();
    console.log(product)

    return (
        <>
            <PageHead title={product.title} />
            <div className="items-center mx-auto max-w-screen-xl py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>slider</div>
                    <div>
                        <h3 className='uppercase font-bold text-xl tracking-wider'>{product.title}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page;
