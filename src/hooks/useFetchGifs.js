import { useState, useEffect } from "react";
import {gifFetch} from '../helpers/getGifs';


export const useFetchGifs = (category) =>{
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    
    useEffect(() => {
        
        gifFetch(category)
            .then(imgData => {
                
                setTimeout(() => {
                    
                    setState({
                        data: imgData,
                        loading: false
                    })
                    
                },2000)
            })
    }, [category]);
    
    
    return state;
}
