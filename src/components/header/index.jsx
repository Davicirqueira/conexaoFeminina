import './index.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Header(){

    const location = useLocation();

    return(

        <header className='comp-header'>

            <div className='image'>

                <img src="/assets/cfLogo.png" alt="" />

            </div>

            <div className='nav'>

                <Link to={'/'} className={location.pathname === '/' ? 'active' : ''}>Sobre nós</Link>

                <Link to={'/contato'} className={location.pathname === '/contato' ? 'active' : ''}>Contato</Link>

                <Link to={'/conexao'} className={location.pathname === '/conexao' ? 'active' : ''}>Conexão</Link>

                <Link to={'/servicos'} className={location.pathname === '/servicos' ? 'active' : ''}>Serviços</Link>

            </div>

        </header>

    );

}