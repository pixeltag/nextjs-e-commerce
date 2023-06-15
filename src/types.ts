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