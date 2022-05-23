import { useState } from "react";
import styled from "styled-components";

export default function Assento({ nome, disponivel, setAssentosReservados, id}){
    const[estaSelecionado, setEstaSelecionado] = useState(false);

    function escolheAssento(){
        if (disponivel){
            if (estaSelecionado){
                setEstaSelecionado(false);
                setAssentosReservados(prevState => {
                    const ids = prevState
                    const index = ids.indexOf(id)
                    ids.slice(index,1)
                    return(ids)
                })
            }else {
                setEstaSelecionado(true)
                setAssentosReservados(prevState => [...prevState, id])
            }
        }
        
    }      

    

    return(
        <Cadeira>
        <div className ={disponivel ? "disponivel" : estaSelecionado ? "selecionado" : "indisponivel"} onClick={() => escolheAssento()}>
            {nome}
        </div>
        </Cadeira>
    );
    
};

const Cadeira = styled.div`

.selecionado{
    background-color: blue;
}
.indisponivel{
    background-color: yellow; 
}
.disponivel{
    background-color: gray;

}
`

