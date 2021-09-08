const Item = ({ producto, precio }) => {

    return (
        <div>
            <h4>{producto}</h4>
            <p>${precio}</p>
        </div>
    );
}

export default Item;