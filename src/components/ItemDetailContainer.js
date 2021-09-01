import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const url = `https://api.giphy.com/v1/gifs/search?q=food&limit=5&api_key=SB4aP8H6wOnuPFzk9FzLp08XKcLdsCTS`;

const ItemDetailContainer = () => {

    /* const getItems = async () => {
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(gif => {
            const { id, title, images: { downsized_medium: { url } } } = gif;

            return {
                id,
                title,
                url
            }
        });

        return gifs;
    } */
    const [gifs, setGifs] = useState([])

    const getItems = () => {
        return new Promise(resolve => {

            setTimeout(() => {
                resolve(
                    fetch(url)
                        .then(respuesta => respuesta.json())
                )
            }, 2000);
        })
    }

    useEffect(() => {
        getItems().then(({data}) => {
            const gif = data.map(gif => {
                const {title, images: { downsized_medium: { url } } } = gif;

                return {
                    title,
                    url
                }
            })

            setGifs(gif);
        })
    }, []);

    const [title, urlGif] = gifs;

    console.log(title, urlGif)

    return (
        <>
            <ItemDetail title={title} url={urlGif} />
        </>
    );
}

export default ItemDetailContainer;