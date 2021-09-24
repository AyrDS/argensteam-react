import Loading from "../ui/Loading";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.length === 0 ? (
                    <Loading />
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
