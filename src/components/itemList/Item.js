import { Link } from "react-router-dom";

const Item = ({ product, id }) => {

    return (
        <div className="col mt-3 animate__animated animate__fadeIn">
            <div className="card cardCustom text-dark">
                <img
                    src={`/../../assets/img/${id}.png`}
                    className="card-img-top mx-auto d-block imgProduct"
                    alt={product}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{product}</h5>
                    <Link to={`/item/${id}`} className="btn btn-primary mt-2">Ver Más</Link>
                </div>
            </div>
        </div>
    );
}

export default Item;