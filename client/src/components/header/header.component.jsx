import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>

                    <Link className='nav-link' to='/'>Home</Link>

                    <Link className='nav-link' to='/clientes'>Clientes</Link>

                    <Link className='nav-link' to='/adicionar-divida'>Adicionar Dívida</Link>
            </div>
        </div>
    )
}

export default Header;