/* *** IMPORTS *** */
import React, { useState } from 'react';
import PropTypes from 'prop-types';


/* *** BODY COMPONENT *** */
function AddCategory({setCategories}) {
    
    const [CategoryValue, setCategoryValue] = useState('');
    
    const handleInputChange = (e) => {
        setCategoryValue( e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(CategoryValue.trim().length <= 2) {
            alert('Inserte una categoría mayor a 2 caracteres')
            setCategoryValue('');
            return;
        }
        
        setCategories(cats => [CategoryValue, ...cats]);
        setCategoryValue('');
    }
    
    return (
        
        <form onSubmit={handleSubmit}>
            
            <input 
                type="text" 
                placeholder="Category"
                value={CategoryValue} 
                onChange={handleInputChange}
            />
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
