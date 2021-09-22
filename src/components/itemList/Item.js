import { Link } from "react-router-dom";

const Item = ({ productName, id, imageUrl }) => {

    return (
        <div className="col mt-3 animate__animated animate__fadeIn">
            <div className="card cardCustom text-dark">
                <img
                    src={imageUrl}
                    className="card-img-top mx-auto d-block imgProduct"
                    alt={productName}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{productName}</h5>
                    <Link to={`/item/${id}`} className="btn btn-primary mt-2">Ver Más</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;