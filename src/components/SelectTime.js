import styled from "styled-components";
import { Link } from "react-router-dom"; 
import Rodape from "./Rodape";  
import { useParams } from "react-router-dom"; 
import axios from "axios"; 
import { useEffect, useState } from "react";  

function Time({key,date,weekday,showtimes}) {   
    const {idFilme} = useParams(); 

    const [movie, setMovie] = useState({}); 
    const [dias, setDias] = useState([]);   


    useEffect(() => {    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);  

        promise.then(response => {
            setMovie({...response.data}); 
            setDias([...response.data.days]);   
        })
    }, []); 


    return( 
        <>
        <DiaHorario>
            <p>{weekday} - {date}</p>  
            {showtimes.map((s,index) => (
            <Link to={`/sessao/${s.id}`}><button key={index}>{s.name}</button></Link> 
            ))}
        </DiaHorario>   
        
        <Rodape 
            posterURL = {movie.posterURL}
            title= {movie.title}
            index= {movie.id}
        /> 
        </>
    )
}


export default function SelectTime() {   
    const {idFilme} = useParams(); 

    const [dias, setDias] = useState([]);  

    useEffect(() => {    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);  

        promise.then(response => {
            setDias([...response.data.days]); 
        })
    }, []); 
    
    return(  
        <>
        <Filmes>
            <p>Selecione o horário</p>  
        </Filmes> 

        {dias.map((dia,index) => ( 
        <Time  
            key={index}
            id = {dia.id} 
            weekday = {dia.weekday}
            date = {dia.date}   
            showtimes = {dia.showtimes}
        /> 
        ))}
        </>
    )
} 





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
        letter-spacing: 0.04em;
    }   
` 

const DiaHorario = styled.div`
    width: 100%; 
    height: 100% 
    padding-left: 24px;  

    p { 
        margin-left: 24px; 
        margin-bottom: 24px; 
        font-size: 20px; 
        letter-spacing: 0.02em; 
        color: rgba(41, 56, 69, 1); 
        font-weight: 400;
    } 

    button { 
        margin-left: 24px; 
        margin-bottom: 24px; 
        background-color: rgba(232, 131, 58, 1); 
        width: 83px; 
        height: 43px; 
        color: rgba(255, 255, 255, 1);
        font-size: 18px; 
        font-weight: 400;  
        border-radius: 3px; 
        border: none; 

        &:hover { 
            cursor: pointer;
        }
    }  

` 

const Footer = styled.div`
    position: fixed;  
    left: 0; 
    bottom: 0;
    width: 100%; 
    height: 117px; 
    background-color: rgba(223, 230, 237, 1);  
    display: flex;   
    align-items: center; 
    border: 3px solid rgba(158, 173, 186, 1)

    span { 
        font-size: 26px; 
        font-weight: 400; 
    }
` 

const FilmeCartaz = styled.div`
    width: 64px; 
    height: 89px; 
    background-color: rgba(255, 255, 255, 1); 
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1); 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    margin-right: 30px; 
    margin-bottom: 15px;  
    margin-left: 14px; 
    margin-right: 14px;

    img { 
        width: 87%; 
        height: 87%;
    }
`