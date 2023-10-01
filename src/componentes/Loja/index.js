import './Loja.css'

function goToItem(url){
    window.open(url, "_blank");
}

const Loja = () => {
    return( 
        <header className="cabecalho">
            <img src='/imagens/bannerLoja.png' alt='Logo do Organo'/>
        </header>
    )
}
    
export default Loja