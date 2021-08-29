const Item = ({ producto, precio }) => {

    return (
        <div className="card">
            <h4>{producto}</h4>
            <p>${precio}</p>
        </div>
    );
}

export default Item;