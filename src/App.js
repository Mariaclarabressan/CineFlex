import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Filmes from "./Filmes";
import BarraTopo from "./TopoPágina";
import Sessoes from "./Sessoes";
import SelecionaAssento from "./SelecionaAssento";

import './reset.css';






export default function App(){
    

    
    return(
        <BrowserRouter>
            <BarraTopo/>

            <Routes>
                <Route path="/" element= {<Filmes />}/>
                <Route path = "/filme/:filmeId" element = {<Sessoes />}/>
                <Route path = "/sessao/:idSessao" element = {<SelecionaAssento/>} />
            </Routes>
        </BrowserRouter>
    )
}