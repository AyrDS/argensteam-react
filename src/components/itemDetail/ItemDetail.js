import { useContext, useState } from "react";
import { context } from "../../context/Context";
import ItemCount from "../ItemCount";
import Loading from "../ui/Loading";


const ItemDetail = ({ item }) => {

    const { description, price, productName, imageUrl } = item;
    const { addItem } = useContext(context);
    const [quantity, setQuantity] = useState(0);

    const onAdd = (quantity) => {
        const newItem = { ...item, quantity };
        addItem(newItem, quantity);
    };

    if (item.length === 0) {
        return (
            <Loading />
        )
    };
    
    return (
        <div className="customDetail p-4 row row-cols-1 row-cols-md-2 m-1 m-sm-0">
            <div className="col col-lg-3">
                <img
                    src={imageUrl}
                    className="img-fluid mx-auto d-block animate__animated animate__fadeInLeft"
                    alt={productName}
                />
            </div>
            <div className="col col-lg-9">
                <h1 className="mt-3 text-center text-md-start" >{productName}</h1>
                <h5>Precio: <span className="text-success">${price}</span></h5>
                <p>{description}</p>
                <ItemCount onAdd={onAdd} setQuantity={setQuantity} quantity={quantity} />
            </div>
        </div>
    );
}
export default ItemDetail;