import './Loja.css'

function goToItem(url){
    // window.open(url, "_blank");
}

const Loja = () => {
    return( 
        <>
        
        <div className= "populares">
                <div className="titulo">
                    <h1>Populares</h1>
                </div>

                {/* Linha de itens */}
                <div className="itens">
                    {/* Capacete */}
                    <div className="item" onClick={goToItem('https://www.decathlon.ie/bike-helmets/308505-13698-kids-mountain-bike-helmet-500-red.html#/demodelsize-296sslash51_56cm/demodelcolor-8549045')}>
                        <img src='/imagens/itensLoja/item-capacete.png' alt='Foto de Capacete'></img>
                        <p className='nomeItem'>Capacete</p>
                        <h2 className = 'preco'>R$ 150,99</h2>
                    </div>

                    {/* Manete */}
                    <div className="item" onClick={goToItem('https://www.ericbikefloripa.com.br/par-manete-freio-sram-avid-fr5-disco-v-brake-p-bike-preto/p/MLB27047048?pdp_filters=category%3AMLB122138%7Cseller_id%3A82037987#position=2&search_layout=stack&type=item&tracking_id=dd7cde71-20d5-4d6a-84a8-ea06d7608bbb')}>
                        <img src='/imagens/itensLoja/item-manete.png' alt='Foto de Manete'></img>
                        <p className='nomeItem'>Manete</p>
                        <h2 className = 'preco'>R$ 129,90</h2>
                    </div>

                    {/* Corta Vento */}
                    <div className="item" onClick={goToItem('https://br.puma.com/jaqueta-puma-x-perks-e-mini-zip-off-538809-79.html')}>
                        <img src='/imagens/itensLoja/item-cortaVento.png' alt='Foto de Corta Vento Rosa'></img>
                        <p className='nomeItem'>Corta Vento</p>
                        <h2 className = 'preco'>R$ 299,99</h2>
                    </div>
         
                    {/* Garrafa */}
                    <div className="item" onClick={goToItem('https://www.loja.tritonaltofalantes.com.br/MLB-2120080604-garrafa-termica-preta-soriedem-triton-750-ml-_JM')}>
                        <img src='/imagens/itensLoja/item-garrafa.png' alt='Foto de Garrafa'></img>
                        <p className='nomeItem'>Garrafa 650ml</p>
                        <h2 className = 'preco'>R$ 49,99</h2>
                    </div>
                </div>

                {/* Linha de itens */}
                <div className="itens" onClick={goToItem('https://www.americanas.com.br/produto/6065296551/conjunto-de-pedal-commuter-da-bontrager')}>
                    {/* Pedais */}
                    <div className="item">
                        <img src='/imagens/itensLoja/item-pedal.png' alt='Foto de pedal de bicicleta'></img>
                        <p className='nomeItem'>Conjunto de Pedal</p>
                        <h2 className = 'preco'>R$ 40,99</h2>
                    </div>

                    {/* Camisa Sport */}
                    <div className="item" onClick={goToItem('https://modabike.com.br/produto/camisa-ciclismo-brava-rosa/')}>
                        <img src='/imagens/itensLoja/item-cortaVento2.png' alt='Foto de camisa cor de rosa'></img>
                        <p className='nomeItem'>Camisa Sport</p>
                        <h2 className = 'preco'>R$ 32,99</h2>
                    </div>

                    {/* Garrafinha 2 */}
                    <div className="item" onClick={goToItem('https://www.aliexpress.com/i/1005004305831631.html')}>
                        <img src='/imagens/itensLoja/item-garrafa2.png' alt='Foto de Garrafa'></img>
                        <p className='nomeItem'>Garrafa 650ml</p>
                        <h2 className = 'preco'>R$ 39,99</h2>
                    </div>
         
                    {/* Tênis */}
                    <div className="item" onClick={goToItem('https://www.lordgunbicycles.co.uk/scott-road-rc-evo-shoes')}>
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