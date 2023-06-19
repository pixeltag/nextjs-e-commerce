'use client';

import { Product } from "@/types";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface CartType {
    cart: Product[];
    setCart: Dispatch<SetStateAction<Product[]>>
}

const GlobalContext = createContext<CartType>({
    cart: [],
    setCart: (): Product[] => []
})

export const GlobalContextProvider = ({ children }: { children: any }) => {
    const [cart, setCart] = useState<Product[] | []>([]);

    return (
        <GlobalContext.Provider value={{ cart, setCart }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)