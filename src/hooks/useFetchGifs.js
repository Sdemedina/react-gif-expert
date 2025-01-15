import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]); // Hacemos todo esto con useFetchGifs
    const [isLoading, setIsLoading] = useState([true]); // Hacemos todo esto con useFetchGifs
    
    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
      getImages();
    }, [] ) 


    return {
        images,
        isLoading
    }
}
