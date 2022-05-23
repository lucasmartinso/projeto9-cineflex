import styled from "styled-components"; 
import SelectTime from "./SelectTime";

export default function Rodape({posterURL,title,index}) { 
    return(
        <Footer>
            <FilmeCartaz>
                <img src={posterURL} alt={index}/>
            </FilmeCartaz>
            <span>{title}</span>
        </Footer>
    )
} 

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