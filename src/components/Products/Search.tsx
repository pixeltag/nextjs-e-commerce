'use client'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface SearchType {
    onSearch: (e: string) => void
}

export const Search = ({ onSearch }: SearchType) => {
    return (
        <div>
            <label className='uppercase block font-medium mb-2'>Search</label>
            <input
                type="text"
                onChange={(e) => onSearch(e.target.value)}
                placeholder='Search for a product'
                className='bg-gray w-full p-5 text-sm' />
        </div>
    )
}
