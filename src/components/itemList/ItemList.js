import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.length === 0 ? (
                    <h1>Espere por favor...</h1>
                ) : (
                    <>
                        {
                            products.map(p => (
                                <Item
                                    key={p.id}
                                    {...p}
                                />
                            ))
                        }
                    </>
                )
            }
        </>
    );
}

export default ItemList;
