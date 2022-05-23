import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";   
import InfoFoter from "./InfoFooter"; 
import axios from "axios";
import { useParams } from "react-router-dom"; 

function Seats({name}) { 
    return(
        <Sits>
            <Link to={`sucesso`}><button>{name}</button></Link>
        </Sits> 
    )
}

export default function Assentos({dados}) {  

    const [name,setName] = useState(""); 
    const [cpf,setCpf] = useState("");  

    function handleName(event) {
        setName(event.target.value);
    }  

    function handleCpf(event) {
        setCpf(event.target.value);
    }
    
    function saveDados() { 
        dados({name: name, cpf: cpf}); 
        setCpf(""); 
        setName("");
    } 

    const {idSessao} = useParams(); 

    const [section, setSection] = useState({});   
    const [info, setInfo] = useState({});  
    const [dias, setDias] = useState({});  
    const [seat, setSeat] = useState([]);


    useEffect(() => {    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);  

        promise.then(response => {
            setSection({...response.data});  
            setInfo({...response.data.movie}); 
            setDias({...response.data.day}); 
            setSeat([...response.data.seats]); 
            console.log(response.data.seats);
        })
    }, []);  

    return( 
        <>
        <Filmes>
            <p>Selecione o(s) assento(s)</p>  
        </Filmes>  

        {seat.map((s,index) => (
            <Seats 
                name = {s.name} 
            /> 
        ))}

        <Estados>  
            <Selecionado>
                <div></div> 
                <p>Selecionado</p>  
            </Selecionado>

            <Disponivel>
                <div></div> 
                <p>Disponível</p>  
            </Disponivel>
                
            <Indisponivel>
                <div></div> 
                <p>Indisponível</p>  
            </Indisponivel>  
        </Estados>  

        <DadosUsuario> 
            <div>
                <p>Nome do comprador:</p> 
                <input 
                    type="text" 
                    placeholder="Digite seu nome..." 
                    onChange={handleName} 
                    value={name}
                >
                </input> 
            </div>
        </DadosUsuario> 

        <DadosUsuario> 
            <div>
                <p>CPF do comprador:</p> 
                <input
                    type="text"
                    placeholder="Digite seu cpf..."  
                    onChange={handleCpf} 
                    value={cpf}
                >
                </input> 
            </div>
        </DadosUsuario> 

        <Reservar><Link to="/horario/assentos/confirmation"><button onClick={saveDados}>Reservar Assento(s)</button></Link></Reservar> 

        <InfoFoter 
            posterURL={info.posterURL} 
            title ={info.title}  
            weekday ={dias.weekday}
            date = {dias.date} 
            name = {section.name}
        />
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

const Sits = styled.div`
    width: 100%; 
    height: 100%;  
    display: flex; 
    flex-wrap: wrap; 
    
    button { 
        margin-left: 24px; 
        margin-bottom: 24px; 
        background-color: rgba(195, 207, 217, 1); 
        width: 26px; 
        height: 26px; 
        color: rgba(0, 0, 0, 1);
        font-size: 11px; 
        font-weight: 400;  
        border-radius: 50%; 
        border: 1px solid rgba(128, 143, 157, 1);  

        &:hover { 
            cursor: pointer;
        } 
    } 
` 

const Estados = styled.div` 
    width: 100%; 
    height: 100%;  
    display: flex;  
    justify-content: center;   
    align-items: center;   

` 

const Disponivel = styled.div` 
    margin-right: 30px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;

    div { 
        margin-left: 24px; 
        margin-bottom: 5px; 
        background-color: rgba(195, 207, 217, 1);
        width: 25px; 
        height: 25px; 
        color: rgba(0, 0, 0, 1);
        font-size: 11px; 
        font-weight: 400;  
        border-radius: 50%; 
        border: 1px solid rgba(123, 139, 153, 1);  
}
` 

const Selecionado = styled.div` 
    margin-right: 30px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;

    div { 
        margin-left: 24px; 
        margin-bottom: 5px; 
        background-color: rgba(141, 215, 207, 1);
        width: 25px; 
        height: 25px; 
        color: rgba(0, 0, 0, 1);
        font-size: 11px; 
        font-weight: 400;  
        border-radius: 50%; 
        border: 1px solid rgba(26, 174, 158, 1);  
}
` 

const Indisponivel = styled.div` 
    margin-right: 30px;  
    display: flex; 
    flex-direction: column; 
    justify-content: center;

    div { 
        margin-left: 24px; 
        margin-bottom: 5px; 
        background-color: rgba(251, 225, 146, 1);
        width: 25px; 
        height: 25px; 
        color: rgba(0, 0, 0, 1);
        font-size: 11px; 
        font-weight: 400;  
        border-radius: 50%; 
        border: 1px solid rgba(247, 197, 43, 1);  
}
`  

const DadosUsuario = styled.div`  
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    margin-top: 20px;  

    div { 
        display: flex;  
        flex-direction: column;
        justify-content: flex-start;
    }

    p {  
        color: rgba(41, 56, 69, 1);
        font-size: 18px; 
        font-weight: 400; 
    } 

    input { 
        width: 327px;
        height: 51px;  
        border: 1px solid rgba(212, 212, 212, 1); 
        font-size: 18px; 
        color: rgba(175, 175, 175, 1); 
        font-style: italic; 
        padding-left: 18px;
    }
` 

const Reservar = styled.div`  
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;

    button {
        margin-left: 24px; 
        margin-bottom: 24px; 
        background-color: rgba(232, 131, 58, 1); 
        width: 225px; 
        height: 42px; 
        color: rgba(255, 255, 255, 1);
        font-size: 18px; 
        font-weight: 400;  
        border-radius: 3px; 
        border: none; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        margin-top: 57px; 

        &:hover { 
            cursor: pointer;  
        } 
    }
`