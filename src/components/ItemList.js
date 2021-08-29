import Item from "./Item";

const ItemList = ({ productos }) => {

    return (
        <>
            {
                productos.length === 0 ? (
                    <h1>Cargando...</h1>
                ) : (
                    <div className="card-grid">
                        {
                            productos.map(producto => (
                                <Item
                                    key={producto.id}
                                    {...producto}
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