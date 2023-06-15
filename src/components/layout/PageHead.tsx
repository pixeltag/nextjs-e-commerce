import React from 'react'

const PageHead = ({ title }: { title: string }) => {
    return (
        <div className='bg-blue text-white'>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-20">
                <h2 className='text-4xl font-light px-16 lg:px-0'>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default PageHead;