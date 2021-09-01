const ItemDetail = ({ data }) => {
    return (
        <>
            <h1 key={data.id}>{data.producto}</h1>
            <h2>Marca: {data.marca}</h2>
            <h3>${data.precio}</h3>
        </>    
    );
}

export default ItemDetail;