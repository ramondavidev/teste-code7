import './home.styles.scss';


const Home = () => {
    return (
        <div id="home">
            <div className='info'>
                <div className='container'>
                    <div className='store-name'>Teste Code7</div>
                    <span className='first-sentence'>Processo seletivo da Code7 que consiste no desenvolvimento de
                        uma aplicação, frontend e backend. Teste feito por <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ramondavidev/">Ramon</a>
                    </span>
                    <div className='store-name'>Tecnologias</div>
                    <span className='second-sentence'>Tecnologias usadas no front: Reactjs, redux e sass. <br/> Tecnologias usadas no back: Node, express e MongoDB.</span>
                    <a href='/produtos' className='link'>
                        <button className='btn'>Comece a comprar</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;