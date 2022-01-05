import { useState } from 'react';
import { Product } from '../interfaces/interfaces';
import {
    ShoppingCart,
} from '../interfaces/shoppingCartInterfaces';

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        console.log(count);
        setShoppingCart((oldShoppingCart: ShoppingCart) => {
            if (count === 0) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                return { ...rest };
            }
            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
