import styled from "styled-components"; 
import SelectTime from "./SelectTime";

export default function InfoFoter({posterURL,title,weekday,name}) { 
    return(
        <Footer>
            <FilmeCartaz>
                <img src={posterURL} />
            </FilmeCartaz> 
            <InfoFooter>
                <p>{title}</p>   
                <p>{weekday} - {name}</p>
            </InfoFooter>
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
    border: 1px solid rgba(158, 173, 186, 1); 
`  
const InfoFooter = styled.div`
    p { 
        font-size: 26px; 
        font-weight: 300; 
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
    margin-left: 14px; 
    margin-right: 14px;

    img { 
        width: 87%; 
        height: 87%;
    }
` 