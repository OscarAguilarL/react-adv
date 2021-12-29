import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    ProductCardProps,
    ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <section className={styles.productCard}>{children}</section>
        </Provider>
    );
};
