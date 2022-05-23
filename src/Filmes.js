import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Filme from './Filme';



export default function Filmes(){
    const [filmes, setFilmes] = useState([]);

    useEffect ( ()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        
        promise.then( (response) => {setFilmes(response.data)})

        promise.catch( (error) => {alert(`Página com problemas: ${error.message}`)})


    } , [])

    return(
        <>
        <BoxTitulo>
        <Titulo>Selecione o filme</Titulo>
        </BoxTitulo>
        <GaleriaFilmes>
        {filmes.map(filme => {
            return(
                <ImagemsFilmes>
                <Link  to = {`/filme/${filme.id}`}><Filme id = {filme.id} posterURL = {filme.posterURL} /></Link>
                </ImagemsFilmes>
            )
        })}
        </GaleriaFilmes>
        
        </>
    )
}

const Titulo = styled.div`
    margin-top: 67px;
    padding: 50px 0;
    font-size: 24px;
    font-family: 'roboto';

`
const BoxTitulo = styled.div `
    display: flex; 
    align-items: center; 
    justify-content: center;  
`

const ImagemsFilmes = styled.div`
    width: 145px;
    

`
const GaleriaFilmes = styled.div `
    display: flex; 
    
`
