import {useState} from 'react';
import { AddCategory,GifGrid } from './components';
// import { AddCategory } from './components/AddCategory'; lAS DOS UNIDAS ARRIBA
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Dragon Ball Z' ]);

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory) ) return;
        // categories.push('Valorant')
        setCategories( [ NewCategory, ...categories ]); // Agregamos al principio de arreglo
    }

  return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory= { (value) => onAddCategory(value) }
            />

            {/* Listado de Gif */}
            {
                categories.map( category => (
                        <GifGrid key={ category } category = { category }/>
                    ))
            }
            {/* Gif Item */}

        </>
    )
}
