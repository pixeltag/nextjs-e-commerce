import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { currencyFormat } from '@/utilities';
import { Product } from '@/types';

export const ProductCard = ({ id, title, images, sale, categories, price }: Product) => {
    return (
        <div className="bg-white mb-4">
            <div className='overflow-hidden relative pt-16'>
                <div className='bg-gray relative h-96 group'>
                    {sale && (<div className='-translate-y-8 translate-x-4 bg-blue text-white py-5 rounded-full h-16 w-16 text-center absolute'>Sale</div>)}
                    <Image className='-translate-y-12 group-hover:-translate-y-16 ease-in-out duration-300 mx-auto' src={images[0]} alt={title} height="435" width="170" />
                    <button className='bg-blue uppercase text-white w-full p-4 absolute bottom-0 opacity-0 group-hover:opacity-100 ease-in-out duration-300'>Add to Cart</button>
                </div>

            </div>
            <a href="#">
            </a>
            <div className="p-5 text-center">
                <Link href={{ pathname: '/product', query: { id } }}>
                    <h5 className="mb-2 text-xl font-medium tracking-tight text-center">{title}</h5>
                </Link>
                <p className="text-blue text-sm text-center mb-8">
                    {categories && categories.map((category, idx) => (<span key={idx}>{idx > 0 && ", "}{category}</span>))}
                </p>
                <span className='bg-blue text-white px-6 py-1.5 mt-4'>{currencyFormat(price)}</span>
            </div>
        </div>
    )
}
