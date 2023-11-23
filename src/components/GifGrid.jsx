//import { useState, useEffect } from "react";
//import { getGifs } from "../helpers/GetGifs";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    /*const [images, setImages] = useState([])

    const getImages = async () =>{
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
      //getGifs(category)
      getImages();
      //.then ( newImages => setImages(newImages) ); 
    }, [])
    */
  return (
    <>
        <h3>{category}</h3>
        {/*
            (isLoading)
            ? (<h2>Cargando...</h2>)
            :null

            forma1
            */
           isLoading && (<h2>Cargando...</h2>)
           //otra forma sería crearlo en un componente y pasarle la propiedad isLoading
        }        
        <div className="card-grid">
            {
                images.map ((image) => (
                    <GifGridItem 
                        key={image.id}
                        //title={image.title}
                        //url={image.url}
                        { ...image} //esparcir las propiedades, y del lado del componente solo extraigo las que requiero
                    />            
                ))
            }
            
        </div>
    </>
  )
}
