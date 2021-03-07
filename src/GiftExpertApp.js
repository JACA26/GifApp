import React, { Fragment, useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GiftExpertApp() {
    
    const [categories, setCategories] = useState(['Valorant']);
    
    return (
        
        <Fragment>
            
            <h2>Gift Expert App</h2>
            <hr/>
            
            <AddCategory setCategories={setCategories} />
            
            <ol>
                {
                    categories.map(category => 
                        
                        <GifGrid 
                            key={category}
                            category={category}
                        />
                        
                    )
                }
                
            </ol>
        </Fragment>
        
    )
}

export default GiftExpertApp
