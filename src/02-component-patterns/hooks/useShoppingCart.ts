import { useState } from 'react';
import { Product } from '../interfaces/interfaces';
import {
    ProductInCart,
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
        setShoppingCart((oldShoppingCart: ShoppingCart) => {
            const productInCart: ProductInCart = oldShoppingCart[
                product.id
            ] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            // borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return { ...rest };

            // if (count === 0) {
            // const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            // return { ...rest };
            // }
            // return {
            //     ...oldShoppingCart,
            //     [product.id]: { ...product, count },
            // };
        });
    };

    return {
        shoppingCart,
        onProductCountChange,
    };
};
