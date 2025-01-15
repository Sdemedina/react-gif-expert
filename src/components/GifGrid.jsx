import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category }) => {

    const { images, isLoading} = useFetchGifs( category );

    // const [images, setImages] = useState([]); // Hacemos todo esto con useFetchGifs
    
    // const getImages = async() => {
    //   const newImages = await getGifs( category );
    //   setImages(newImages);
    // }

    // useEffect( () => {
    //   getImages();
    // }, [] )        // el useeffect sirve para disparar efectos secundarios
    
    
    return (
    <>
        <h3> {category} </h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        
        <div className="card-grid">
          {
            images.map( ( image ) => (
                <GifItem key={ image.id }
                { ...image } // Acceso a todas las properties
                />
            ))
          }

        </div>
    </>
  )
}
