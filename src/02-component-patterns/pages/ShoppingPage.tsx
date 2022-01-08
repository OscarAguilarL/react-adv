import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[1];

export const ShoppingPage = () => {
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
                <ProductCard
                    key={product.id}
                    product={product}
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {({
                        reset,
                        increaseBy,
                        isMaxCountReached,
                        maxCount,
                        counter,
                    }) => (
                        <>
                            <ProductImage className="custom-image" />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            {/* {JSON.stringify(args, null, 4)} */}
                            <button onClick={reset}>reset</button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            {/* si no se llega al maxCount, ocultar */}
                            {!isMaxCountReached && (
                                <button onClick={() => increaseBy(+2)}>
                                    +2
                                </button>
                            )}
                            <span>
                                {counter} - {maxCount}
                            </span>
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    );
};
