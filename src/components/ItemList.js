import Item from "./Item";

const ItemList = ({ products }) => {

    return (
        <>
            {
                products.length === 0 ? (
                    <h1>Cargando...</h1>
                ) : (
                    <div>
                        {
                            products.map(p => (
                                <Item
                                    key={p.id}
                                    {...p}
                                />
                            ))
                        }
                    </div>
                )
            }
        </>
    );
}

export default ItemList;