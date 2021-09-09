const getProducts = async () => {
    const url = "https://mocki.io/v1/b0c640d3-4755-46f1-b179-f10fdaf6099e";
    const result = await fetch(url);
    const data = await result.json();

    return data;
};

export default getProducts;