import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ onAdd, onSubtract, quantity }) => {

    return (
        <>
            <button className="btn btn-primary me-3" onClick={onAdd}> Agregar al carro <FontAwesomeIcon icon={faCartPlus} /> </button>
            <button className="btn btn-danger" onClick={onSubtract}> Eliminar del carro <FontAwesomeIcon icon={faTrashAlt} /> </button>
            {
                quantity > 0 && <p className="mt-3 mb-0 fw-bold">Cantidad elegida: <span className="fw-normal">{quantity}</span></p>
            }
        </>
    );
}

export default ItemCount;