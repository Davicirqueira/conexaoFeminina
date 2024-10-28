import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './pages/About';
import Conexao from './pages/Conexao';
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";

export default function Navigate() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path='/' element={<About />} />
                <Route path='/Conexao' element={<Conexao />} />
                <Route path='/Contato' element={<Contato />} />
                <Route path='/Servicos' element={<Servicos />} />

            </Routes>

        </BrowserRouter>


    );

}