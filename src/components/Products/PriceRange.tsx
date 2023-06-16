'use client'
import { currencyFormat } from '@/utilities';
import Slider from '@mui/material/Slider';
interface PriceRangeType {
    price: number[];
    onPriceChange: (e: number[]) => void
}

export const PriceRange = ({ price, onPriceChange }: PriceRangeType) => {

    return (
        <div className='mt-12'>
            <label className='uppercase block font-medium mb-2'>Price</label>
            <Slider
                value={price}
                size="small"
                min={10}
                max={500}
                color='primary'
                onChange={(e, v: any) => onPriceChange(v)}
                valueLabelDisplay="auto"
            />
            <div className='flex w-full justify-between'>
                <div>
                    {currencyFormat(price[0])}
                </div>
                <div>
                    {currencyFormat(price[1])}
                </div>
            </div>
        </div>
    )
}
