import Link from 'next/link';
import React from 'react'

export const Categories = ({ categories }: { categories: Array<{ id: number, title: string }> }) => {

    const handlefilterByCategory = () => {

    }

    return (
        <div className='mt-12'>
            <label className='uppercase block font-medium mb-6'>CATEGORIES</label>
            <ul>
                {
                    categories.map((category) => (
                        <li key={category.id} className='mb-4'><button className='text-darkGray'>{category.title}</button></li>
                    ))
                }
            </ul>
        </div>
    )
}
