const ItemDetail = ({title, url}) => {
    return (
        <>
            {
                title === undefined ? (
                    <h1>Cargando...</h1>
                ) : (
                    <div>
                        <img src={url} alt={title} />
                        <h1>{title}</h1>
                    </div>
                )
            }
        </>
    );
}

export default ItemDetail;