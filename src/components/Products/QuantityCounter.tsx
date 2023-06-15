import React, { useState } from 'react'
import Up from '/public/svg/up.svg'
import Down from '/public/svg/down.svg'

const type = {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE"
}

const QuantityCounter = () => {
    const [quantity, setQuantity] = useState<number>(1)

    const handleQuantity = (actionType: string) => {
        if (actionType === type.INCREASE) {
            setQuantity(prev => prev + 1)
        } else if (actionType === type.DECREASE) {
            quantity > 1 ? setQuantity(prev => prev - 1) : setQuantity(1)
        }
    }

    return (
        <div className='flex items-center'>
            <div className='p-6 font-bold'>{quantity}</div>
            <div className='flex flex-col'>
                <button onClick={() => handleQuantity(type.INCREASE)} className='border-b-2'><Up className='w-10 h-8' /></button>
                <button onClick={() => handleQuantity(type.DECREASE)}><Down className='w-10 h-8' /></button>
            </div>
        </div>
    )
}

export default QuantityCounter;