import './Loja.css'

const Loja = () => {
    return( 
        <div className="populares">
            <div className="titulo">
                <h1>Populares</h1>
            </div>
            
            <div className="itens">
                <div className="item">
                    <img src="/imagens/itensLoja/item-capacete.png" alt="Foto de Capacete"/>
                    <p className="nomeItem">Capacete</p>
                    <h2 className="preco">R$ 150,99</h2>
                </div>

                <div className="item">
                <img src="/imagens/itensLoja/item-manete.png" alt="Foto de Manete"/>
                    <p className="nomeItem">Manete</p>
                    <h2 className="preco">R$ 129,90</h2>
                </div>
                
                <div className="item">
                    <img src="/imagens/itensLoja/item-cortaVento.png" alt="Foto de Corta Vento Rosa"/>
                    <p className="nomeItem">Corta Vento</p>
                    <h2 className="preco">R$ 299,99</h2>
                </div>
                
                <div className="item">
                    <img src="/imagens/itensLoja/item-garrafa.png" alt="Foto de Garrafa"/>
                    <p className="nomeItem">Garrafa 650ml</p>
                    <h2 className="preco">R$ 49,99</h2>
                </div>
            </div>
            
            <div className="itens">
                <div className="item">
                    <img src="/imagens/itensLoja/item-pedal.png" alt="Foto de pedal de bicicleta"/>
                    <p className="nomeItem">Conjunto de Pedal</p>
                    <h2 className="preco">R$ 40,99</h2>
                </div>
                
                <div className="item">
                    <img src="/imagens/itensLoja/item-cortaVento2.png" alt="Foto de camisa cor de rosa"/>
                    <p className="nomeItem">Camisa Sport</p>
                    <h2 className="preco">R$ 32,99</h2>
                </div>
                
                <div className="item">
                    <img src="/imagens/itensLoja/item-garrafa2.png" alt="Foto de Garrafa"/>
                    <p className="nomeItem">Garrafa 650ml</p>
                    <h2 className="preco">R$ 39,99</h2>
                </div>
                
                <div className="item">
                    <img src="/imagens/itensLoja/item-tenis.png" alt="Foto de tênis esportivo"/>
                    <p className="nomeItem">Tênis Esportivo</p>
                    <h2 className="preco">R$ 299,99</h2>
                </div>
            </div>
        </div>
    )
}

export default Loja