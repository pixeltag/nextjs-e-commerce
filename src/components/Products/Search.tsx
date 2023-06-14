'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export const Search = () => {
    const [search, setSearch] = useState('');
    // const router = useRouter();
    return (
        <div>
            <label className='uppercase block font-medium mb-2'>Search</label>
            <input type="text" placeholder='Search for a product' className='bg-gray w-full p-5 text-sm' onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}
