import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import styled from 'styled-components'; 


import InitialScreen from "./InitialScreen";
import SelectTime from "./SelectTime";  
import Assentos from "./Assentos";
import Confirmation from "./Confirmation";
import { useState } from "react/cjs/react.production.min";


export default function App() {   
    return(   
        <>
        <BrowserRouter>
            <Topo>CINEFLEX</Topo>  
            <Routes>
                <Route path="/" element = {<InitialScreen />} /> 
                <Route path="/horario" element = {<SelectTime />} /> 
                <Route path="/horario/assentos" element = {<Assentos />} />    
                <Route path="/horario/assentos/confirmation" element = {<Confirmation />} />
            </Routes>
        </BrowserRouter> 
        </>
    )
}  

const Topo = styled.div`
    width: 100%; 
    height: 67px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    color: rgba(232, 131, 58, 1); 
    font-size: 34px;
    font-weight: 400; 
    background-color: rgba(195, 207, 217, 1); 
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15); 
` 