import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";


const ItemDetail = ({ item }) => {
    const { id, desc, price, product } = item;

    return (
        <div className="customDetail p-4 row row-cols-1 row-cols-md-2 m-1 m-sm-0">
            <div className="col col-lg-3">
                <img
                    src={`/../../assets/img/${id}.png`}
                    className="img-fluid mx-auto d-block"
                    alt={product}
                />
            </div>
            <div className="col col-lg-9">
                <h1 className="mt-3 text-center" >{product}</h1>
                <h5>Precio: <span className="text-success">${price}</span></h5>
                <p>{desc}</p>
                <button className="btn btn-success">Agregar al carrito <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>
    );
}
//src={`/../../assets/img/${id}.png`}
export default ItemDetail;