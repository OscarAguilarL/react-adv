import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {products.map((item, index) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        className="bg-dark text-white"
                        onChange={onProductCountChange}
                        value={shoppingCart[item.id]?.count || 0}
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))}
            </div>

            <div className="shopping-cart">
                {Object.entries(shoppingCart).map(([keys, product]) => (
                    <ProductCard
                        product={product}
                        className="bg-dark text-white"
                        style={{
                            width: '100px',
                        }}
                        key={keys}
                        onChange={onProductCountChange}
                        value={product.count}
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        />
                    </ProductCard>
                ))}
            </div>
        </div>
    );
};
