import { Fragment } from "react";
import styled from "styled-components";

const Topo = styled.div`
display: flex; 
width: 100%;
justify-content: center; 
align-items: center;
height: 67px;
font-weight: normal;
background-color: #C3CFD9;
color:#E8833A;
font-size: 34px;
top: 0;    
position: fixed;
z-index: 2;


`;


export default function BarraTopo(){
    

    return (
        <Fragment>
            <Topo>
                <h1>CINEFLIX</h1>
            </Topo>
        </Fragment>
    )
}

