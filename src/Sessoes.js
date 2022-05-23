import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BarraBase from './BarraBase';


export default function Sessoes(){
    const { filmeId } = useParams();

    const[sessoes, setSessoes] = useState([]);
    const[titleFilme, setTitleFilme] = useState("");
    const[posterURL, setPosterURL] = useState("");

    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`)

        promise.then((response) => {
            setSessoes(response.data.days);
            setTitleFilme(response.data.title);
            setPosterURL(response.data.posterURL);
            

        });
        promise.catch((error) => {
            alert("Página com problema, tente mais tarde")
        })

    },[filmeId]);

    return(
        <>
        
        {sessoes.map(day => {
            return(
                <>
                <Horarios>{day.weekday} - {day.date}</Horarios>

                {day.showtimes.map(horario => {
                    return(
                       <Link to = {`/sessao/${horario.id}`}>
                       <BotaoHorario>{horario.name}</BotaoHorario>                                           
                       </Link> 
                    )
                })}
                </>
            )
        })

        }
        <BarraBase posterURL= {posterURL} title = {titleFilme}/>
        </>
        
        
    )
}

const Horarios = styled.h3 `
font-size: 24px; 
font-family: 'roboto';
color: #293845;
font-weight: 400;
margin-top: 67px; 
padding: 30px 0;
`

const BotaoHorario = styled.button `
width: 82px; 
height: 43px;
background-color:#E8833A;
color: #FFFFFF;
border-radius: 3px;
border: none; 
margin: 0 10px; 
`