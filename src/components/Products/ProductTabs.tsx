'use client'
import React from 'react'
import { Product } from '@/types';

const ProductTabs = ({ product }: { product: Product }) => {

    return (
        <div className=''>
            <ul className='border-b border-lightGray pe-32 '>
                <li className='inline-block'>
                    <button className='py-5 uppercase font-bold text-sm border-b border-blue text-left pe-12 me-4'>
                        Description
                    </button>
                </li>
                <li className='inline-block'>
                    <button className='py-5 uppercase font-bold text-sm text-left pe-12 me-4'>
                        ADDITIONAL INFORMATION
                    </button>
                </li>
                <li className='inline-block'>
                    <button className='py-5 uppercase font-bold text-sm text-left pe-12 me-4'>
                        REVIEWS (1)
                    </button>
                </li>
            </ul>
            <div>
                <p className='py-12 text-md text-darkGray'>{product?.desription}</p>
            </div>
        </div>
    )
}

export default ProductTabs;