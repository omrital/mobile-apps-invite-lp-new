import React from 'react';
import { Badge } from 'wix-style-react';

export interface Product {
    id: string;
    imageSrc: string;
    title: string;
    subtitle: string;
    badge: JSX.Element;
}

interface StoreContext {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (id: string) => void;
}

export const useContextValue = (): StoreContext => {
    const defaultProducts: Product[] = [
        {
            id: '1',
            imageSrc:
                'https://litb-cgis.rightinthebox.com/images/x/202105/bps/product/inc/qruive1621230222516.jpg',
            title: 'Blue Dress',
            subtitle: '$15.99',
            badge: <Badge skin="standard"> Popular</Badge>,
        },
        {
            id: '2',
            imageSrc:
                'https://litb-cgis.rightinthebox.com/images/640x640/202001/bgldfg1578901323092.jpg',
            title: 'Yellow Dress',
            subtitle: '$7.89',
            badge: <Badge skin="standard">New</Badge>,
        },
    ];

    const [products, setProducts] = React.useState<Product[]>(defaultProducts);
    const addProduct = (product: Product) => {
        setProducts([...products, product]);
    };

    const removeProduct = (id: string) => {
        setProducts([...products.filter((product) => product.id !== id)]);
    };

    return {
        products,
        addProduct,
        removeProduct,
    };
};

export const Context = React.createContext<StoreContext>({
    products: [],
    addProduct: () => undefined,
    removeProduct: () => undefined,
});