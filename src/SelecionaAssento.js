import axios from 'axios';
import Assento from './Assento';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function SelecionaAssento({ envioDeConfirmacao }) {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState([]);
    const [assentosResevados, setAssentosReservados] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [conferencia, setConferencia] = useState(false);


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then(response => {
            setAssentos(response.data.seats);
        })

        promise.catch(error => {
            alert("Carregando, aguarde")
        })

    }, [idSessao]);

    
    function confirmacaoSessao() {
        if (assentosResevados.length ==! 0 && nome.length ==! 0 && cpf.length ===11) {
            
        } 

    }

   

    useEffect(() => {
        const teste = assentosResevados.length !== 0 && nome.length !== 0 && !(cpf.length !== 11)
        setConferencia(teste);


    }, [assentosResevados.ids, nome, cpf])


    return (
        <>
            <div className="titulo-topo">
                <TituloAssentos>Selecione o(s) assento(s)</TituloAssentos>
            </div>
            <Assentos>

                {
                    assentos.map(assento => {

                        return (

                            <Assento nome={assento.name} disponivel={assento.isAvailable} setAssentosReservados={setAssentosReservados} id={assento.id} />
                        )
                    })
                }


            </Assentos>
            <InformacaoCliente>
                <div className="cliente-nome">
                    <span className="nome">
                        Nome do comprador:
                    </span>
                    <input type="text" className="input-nome" placeholder='Digite seu nome' />
                </div>

                <div className="cliente-cpf">
                    <span className="cpf">
                        CPF do comprador:
                    </span>
                    <input type="text" className="input-cpf" placeholder='Digite seu CPF' />
                </div>

                <button onClick={() => confirmacaoSessao()}>
                    Reservar assento(s)
                </button>





            </InformacaoCliente>


        </>

    )

}
const Assentos = styled.div`
display: flex; 
justify-content: center;
align-items: center; 
flex-wrap: wrap;
padding: 10px 30px; 
margin-top: 67px; 

div{
    width: 26px;
    height: 26px; 
    border-radius: 50%; 
    background-color: #C3CFD9;
    display: flex;
    justify-content: center; 
    align-items: center; 
    gap: 10px;
    flex-wrap: wrap;

}

`
const TituloAssentos = styled.h2`
display: flex; 
justify-content: center;
align-items: center;
margin-top: 67px;
font-size: 24px; 
color: #293845;
font-weight: 400;
font-family: 'roboto';
`

const InformacaoCliente = styled.div``