export interface Product {
    id: number;
    title: string;
    desription: string;
    price: number;
    sale: boolean;
    sku: number;
    categories: Array<string>;
    tags: Array<string>;
    images: Array<string>;
    quantity?: number;
}

export interface Cart {
    id: number;
    title: string;
    desription: string;
    price: number;
    sale: boolean;
    sku: number;
    categories: Array<string>;
    tags: Array<string>;
    images: Array<string>;
    quantity: number;
}

export const QuantityActions = {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE"
}