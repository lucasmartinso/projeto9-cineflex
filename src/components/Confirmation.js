import styled from "styled-components";  
import { Link } from "react-router-dom";  

export default function Confirmation() { 
    return( 
        <>
        <Filmes>
            <p>Pedido feito com sucesso!</p>  
        </Filmes>   

        <Info> 
            <a>Filme e Sessão</a>
            <p>Interestelar</p> 
            <p>24/06/2021 - 15:00</p>
        </Info>  

        <Info> 
            <a>Ingressos</a>
            <p>Interestelar</p> 
            <p>24/06/2021 - 15:00</p>
        </Info>  

        <Info> 
            <a>Comprador</a>
            <p>Interestelar</p> 
            <p>24/06/2021 - 15:00</p>
        </Info>   

        <Botao><Link to="/"><button>Voltar pra Home</button></Link></Botao>
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
        color:rgba(36, 122, 107, 1);  
        margin-top: 55px; 
        margin-bottom: 55px;
        word-break: break-word;
    }   
` 
const Info = styled.div`
    width: 100%; 
    height: 100%;   
    display:flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;

    p{ 
        font-weight: 300; 
        font-size: 18px;  
    } 

    a{ 
        font-weight: 700; 
        font-size: 18px;  
    }
`   
const Botao = styled.div`
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