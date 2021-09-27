import { createContext, useState } from 'react';

export const context = createContext();
const { Provider } = context;

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {

            const newCart = cart.map(product => {
                if (product.id === item.id) {
                    product.quantity += quantity;
                    return product;
                } else {
                    return product;
                };
            });

            setCart([...newCart]);
        } else {
            setCart([...cart, item]);
        }
    };

    const showTotal = () => {
        let total = 0;
        cart.forEach(p => {
            total += p.quantity * p.price;
        });

        return total;
    };

    const removeItem = id => {
        const newCart = cart.filter(product => {
            if (product.id === id) {
                if (product.quantity > 1) {
                    product.quantity--;
                    return product;
                } else {
                    return product = null;
                }
            } else {
                return product;
            }
        });

        setCart(newCart);
    }

    const clear = () => setCart([]);

    const isInCart = id => cart.some(item => item.id === id);

    const context = {
        cart,
        addItem,
        removeItem,
        showTotal,
        clear,
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}