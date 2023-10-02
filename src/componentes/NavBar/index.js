import './NavBar.css'

const NavBar = () => {
    return(
    <>
        <div className='containerNavBar'>
            <img className='artemisLogo' src="https://artemisbike.vercel.app/static/media/Artemis.23e38594c76321c1d995.png" alt="logo do Ártemis"></img>
        
            <div className='navegacao'>
                <a className='tela'>Home</a>
                <a className='tela'>Loja</a>
            </div>
        </div>
    </>
    )
}

export default NavBar