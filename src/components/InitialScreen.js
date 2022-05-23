import { Link } from "react-router-dom";  
import { useParams } from "react-router-dom";  
import axios from 'axios';
import { useEffect, useState } from "react"; 

import styled from 'styled-components';

function Filme({posterURL,index}) {  
    
    return(  
        <>
        <Link to= {`/filme/${index}`}>
        <FilmeCartaz>
            <img src={posterURL} alt={index} />
        </FilmeCartaz> 
        </Link>  
        </>
    )
}
 
export default function InitialScreen() {    
    const [images, setImages] = useState([]);   

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");  

        promise.then(response => { 
            setImages([...response.data]); 
        }); 
    }, []);


    return( 
        <>  

        <Filmes>
            <p>Selecione o filme</p>  
        </Filmes>

        <FilmeSelection>
            <ul>  
            {images.map(image=>
                <Filme 
                    index = {image.id} 
                    posterURL={image.posterURL}  
                />  
            )}   
            </ul>
        </FilmeSelection>
        
        </>
    ) 
}  





// CSS

const Filmes = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column; 

    p { 
        font-size: 24px; 
        color: rgba(41, 56, 69, 1); 
        margin-top: 55px; 
        margin-bottom: 55px;
    }  
`
const FilmeSelection = styled.div`
    width: 100%;
    height: 100%; 
    padding-right: 30px; 
    padding-left: 30px; 
    display: flex; 
    flex-wrap: wrap; 

    ul {  
        display: flex;  
        flex-wrap: wrap;
    }  

    &:hover {
        cursor: pointer;
    }
` 
const FilmeCartaz = styled.li`
    width: 145px; 
    height: 209px; 
    background-color: rgba(255, 255, 255, 1); 
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-right: 30px; 
    margin-bottom: 15px; 

    img { 
        width: 87%; 
        height: 87%;
    }
`