import React from 'react'
import Image from 'next/image'

export const Banner = () => {
    return (
        <div className='my-16'>
            <Image src={'/images/ads.png'} width='321' height='246' alt='bloowatch' />
        </div>
    )
}
