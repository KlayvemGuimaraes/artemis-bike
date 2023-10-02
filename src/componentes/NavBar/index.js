import './NavBar.css'

const NavBar = () => {
    return(
    <>
        <div className='containerNavBar'>
            <a href='./'>
                <img className='artemisLogo' src="https://artemisbike.vercel.app/static/media/Artemis.23e38594c76321c1d995.png" alt="logo do Ártemis"></img>
            </a>
        
            <div className='navegacao'>
                <a className='tela' href='/'>Home</a>
                <a className='tela' href='/loja'>Loja</a>
            </div>
        </div>
    </>
    )
}

export default NavBar