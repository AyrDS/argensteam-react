import { useState } from 'react';

const ItemCount = ({ stock, onAdd, initial }) => {

    let [contador, setContador] = useState(initial);

    const sumar = () => {
        if (contador < stock) {
            setContador(++contador);
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(--contador);
        }
    }
    const agregar = () => {
        if(stock > 0){
            onAdd(contador);
        }
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={sumar} >+</button>
            <button onClick={restar} >-</button>
            <button onClick={agregar} >Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;