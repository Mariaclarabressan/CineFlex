
import styled from "styled-components";

export default function Filme({ id, posterURL }) {
    return (
        <BoxFilmes> 

        <ImagemFilme key={id} >

            <img className="filme-imagem" src={posterURL} />
        </ImagemFilme>

        </BoxFilmes>



    );
}

const ImagemFilme = styled.div`
display: flex;
align-items: center;
justify-content: center; 
width: 145px;
height: 209px;
border-radius: 5px;
img{
    width: 129px;
    height: 193px;

}
`
const BoxFilmes = styled.div`
display: flex; 
align-items: center; 
justify-content: center; 
flex-wrap: nowrap;
`
