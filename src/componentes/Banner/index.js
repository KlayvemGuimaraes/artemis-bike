import './banner.css'

function goToItem(url){
    window.open(url, "_blank");
}

const Banner = () => {
    return (
        <>
            <header className="cabecalho ">
                <img src='/imagens/banner.png' alt='Logo do Organo'/>
            </header>
        </>

    )
}

export default Banner