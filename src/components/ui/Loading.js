const Loading = () => {
    return (
        <main className="position-relative container" style={{ height: "75vh" }}>
            <div className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center justify-content-center">
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
                <h4 className="text-center mb-0 mt-3">Espere por favor...</h4>
            </div>
        </main>
    );
}

export default Loading;