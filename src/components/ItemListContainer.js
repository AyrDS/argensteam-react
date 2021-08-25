import ItemCount from './ItemCount';
const ItemListContainer = () => {
    return ( 
        <ItemCount stock={5} onAdd={(cantidad) => {console.log(`Cantidad elegidad: ${cantidad}`)}} initial={1}/>
    );
}

export default ItemListContainer;