import { useContext } from 'react';

import { productContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    img?: string;
    style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
    const { product } = useContext(productContext);
    let imgToShow: string;

    if (img) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }

    return (
        <img
            src={imgToShow}
            className={`${styles.productImg} ${className}`}
            alt={product.title}
            style={style}
        />
    );
};
