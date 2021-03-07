/* *** IMPORTS *** */
import React from 'react'
import GifGridItem from './GifGridItem';
import {useFetchGifs} from '../hooks/useFetchGifs';
import '../css/loader.css';


/* *** BODY COMPONENT *** */
function GifGrid({category}) {
    
    
    //data:images se le da el alias de images para mejor manejo de variables
    const {data:images, loading} = useFetchGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeInDown"> Resultados para: {category} </h3>
            {loading && 
                <>
                    <div className="sk-cube-grid">
                        <div className="sk-cube sk-cube1"></div>
                        <div className="sk-cube sk-cube2"></div>
                        <div className="sk-cube sk-cube3"></div>
                        <div className="sk-cube sk-cube4"></div>
                        <div className="sk-cube sk-cube5"></div>
                        <div className="sk-cube sk-cube6"></div>
                        <div className="sk-cube sk-cube7"></div>
                        <div className="sk-cube sk-cube8"></div>
                        <div className="sk-cube sk-cube9"></div>
                    </div>
                    <p className="txt_loader">Cargando...</p>
                </>
            }
            
            <div className='card-grid'>
                    {
                        images.map(img =>(
                            <GifGridItem 
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
                    
            </div>
        </>
    )
}

export default GifGrid
