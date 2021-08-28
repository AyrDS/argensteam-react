// import ItemCount from './ItemCount';
import ItemList from './ItemList';


const ItemListContainer = () => {
    return (
        <>
            <ItemList />

            {/* <ItemCount
                stock={5}
                onAdd={(cantidad) => { console.log(`Cantidad elegidad: ${cantidad}`) }}
                initial={1}
            /> */}
        </>
    );
}

export default ItemListContainer;