import { createContext, useState } from 'react';

export const context = createContext();
const { Provider } = context;

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {

    };

    const removeItem = (id) => {

    }

    const clear = () => {

    }

    
}