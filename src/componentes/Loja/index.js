import './Loja.css'
import bannerLoja from './bannerLoja.png'

const Loja = () => {
    return( 
        <>
        <img className="imgBanner" src={bannerLoja} alt='banner'/>
        <div className="populares">
                <div className="titulo">
                    <h1>Populares</h1>
                </div>

                {/* Linha de itens */}
                <div className="itens">
                    {/* Capacete */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-capacete.png' alt='Foto de Capacete'></img>
                        <p className='nomeItem'>Capacete</p>
                        <h2 className = 'preco'>R$ 150,99</h2>
                    </div>

                    {/* Manete */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-manete.png' alt='Foto de Manete'></img>
                        <p className='nomeItem'>Manete</p>
                        <h2 className = 'preco'>R$ 129,90</h2>
                    </div>

                    {/* Corta Vento */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-cortaVento.png' alt='Foto de Corta Vento Rosa'></img>
                        <p className='nomeItem'>Corta Vento</p>
                        <h2 className = 'preco'>R$ 299,99</h2>
                    </div>
         
                    {/* Garrafa */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-garrafa.png' alt='Foto de Garrafa'></img>
                        <p className='nomeItem'>Garrafa 650ml</p>
                        <h2 className = 'preco'>R$ 49,99</h2>
                    </div>
                </div>

                {/* Linha de itens */}
                <div className="itens">
                    {/* Pedais */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-pedal.png' alt='Foto de pedal de bicicleta'></img>
                        <p className='nomeItem'>Conjunto de Pedal</p>
                        <h2 className = 'preco'>R$ 40,99</h2>
                    </div>

                    {/* Camisa Sport */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-cortaVento2.png' alt='Foto de camisa cor de rosa'></img>
                        <p className='nomeItem'>Camisa Sport</p>
                        <h2 className = 'preco'>R$ 32,99</h2>
                    </div>

                    {/* Garrafinha 2 */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-garrafa2.png' alt='Foto de Garrafa'></img>
                        <p className='nomeItem'>Garrafa 650ml</p>
                        <h2 className = 'preco'>R$ 39,99</h2>
                    </div>
         
                    {/* Tênis */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-tenis.png' alt='Foto de tênis esportivo'></img>
                        <p className='nomeItem'>Tênis Esportivo</p>
                        <h2 className = 'preco'>R$ 299,99</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loja