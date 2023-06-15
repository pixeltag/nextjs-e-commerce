'use client'
import React, { useState } from 'react'
import Image from 'next/image';

const ImageSlider = ({ images }: { images: string[] }) => {
    const [primImg, setPrimImg] = useState<string>(images[0])
    return (
        <div className='flex'>
            <div>
                {images.map((img, idx) => <div key={idx} className='w-28  h-50 bg-gray mb-2 p-4 cursor-pointer' onClick={() => setPrimImg(img)}><Image src={img} width="40" height="40" alt="ddd" className='mx-auto' /></div>)}
            </div>
            <div className='bg-gray w-full ms-8'>
                <Image src={primImg} loading='lazy' width="170" height="200" quality={80} alt="ddd" className='mx-auto my-12' />
            </div>
        </div>
    )
}

export default ImageSlider;