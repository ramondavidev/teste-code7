import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div>
                    <Link className='nav-link' to='/'>Home</Link>
                </div>
                <div>
                    <Link className='nav-link' to='/clientes'>Clientes</Link>
                </div>
                <div>
                    <Link className='nav-link' to='/adicionar-divida'>Adicionar Dívida</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;