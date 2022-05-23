import styled from "styled-components"

export default function BarraBase ({ posterURL, title}){
    return(
        <FilmeEscolhido>
            <img src = {posterURL}></img>
            <TituloFilme>
                {title}
            </TituloFilme>
        </FilmeEscolhido>
    )
}

const FilmeEscolhido = styled.div`
background-color: #DFE6ED;
height: 117px;
color: black; 
img{
    width: 48px;
    height: 72px;
}
`
const TituloFilme = styled.h1 `
color:black; 
`
