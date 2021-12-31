import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import { Product, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
            }}
        >
            <section
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </section>
        </Provider>
    );
};
