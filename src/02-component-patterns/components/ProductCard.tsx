import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';

import {
    InitialValues,
    onChangeArgs,
    Product,
    ProductCardHandlers,
    ProductContextProps,
} from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[];
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({
    children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues,
}: Props) => {
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
        useProduct({
            onChange,
            product,
            value,
            initialValues,
        });

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product,
                maxCount,
            }}
        >
            <section
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children({
                    counter,
                    isMaxCountReached,
                    maxCount,
                    product,
                    increaseBy,
                    reset,
                })}
            </section>
        </Provider>
    );
};
