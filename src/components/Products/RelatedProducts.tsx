"use client"
import { Product } from '@/types'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Rating } from '@mui/material'


export const RelatedProducts = ({ products }: { products: Product[] }) => {
    const relatedProducts = products.slice(2, 5)
    return (
        <div className='mt-16'>
            <label className='uppercase block font-medium mb-6'>Related Products</label>
            <ul>
                {
                    relatedProducts.map((product) => (
                        <li key={product.id} className='mb-4'>
                            <Link href="/product/1">
                                <div className='flex align-center'>
                                    <div className='bg-gray h-32 w-24 p-5 me-4'>
                                        <Image src={product.images[0]} className='mx-auto' alt={product.title} width={40} height={40} />
                                    </div>
                                    <div>
                                        <h5 className='mt-4 font-medium mb-4'>{product.title}</h5>
                                        <Rating name="size-small" defaultValue={2} size="small" />

                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
