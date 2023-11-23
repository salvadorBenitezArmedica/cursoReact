import {useState} from 'react';
/*import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';*/

//con archivos de barril
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = (newCaterogy) => {
        //setCategories(['Valorant',...categories]);  
        if(categories.includes(newCaterogy)) return;
        
        setCategories([newCaterogy,...categories]);
        //console.log(newCaterogy);
    }
    //onAddCategory();
    return(
        <>
            {/*titulo */}
            <h1>GifExpertApp</h1>
            
            {/*Input */}
            <AddCategory 
                //setCategories={setCategories}
                onNewCategory = { onAddCategory }
            />           
            
                {/*categories.map( (category) => <li key={category}>{category}</li>)*/}
                {categories.map( (category) => (
                    <GifGrid 
                        key={category} 
                        category={category}/>
                ))}
          
            {/*Listado de gifs */}
                {/*gif item */}
        </>
    )
}