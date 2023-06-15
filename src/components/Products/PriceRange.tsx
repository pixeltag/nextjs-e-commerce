'use client'
import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value: number) {
    return `${value}°C`;
}

export const PriceRange = () => {
    const [value, setValue] = useState<number[]>([0, 200]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <div className='mt-12'>
            <label className='uppercase block font-medium mb-2'>Price</label>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                size="small"
                color='primary'
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </div>
    )
}
