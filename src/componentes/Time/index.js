import Colaborador from '../Colaborador'
import './time.css'
// import hexToRgba from 'hex-to-rgba';
 
const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    return (
        colaboradores.length > 0 && <><div className='timeContainer'><section className='time'>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor' />
            
            <div className='foto'><img src={time.url}></img></div>
            
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>

            <div className='informacoes'>
                <h4 className='quilometros'>{time.kms}</h4>
                <h4 className='categoriaCiclismo'>{time.indicacao}</h4>
            </div>

            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            aoDeletar={aoDeletar}
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
            </div>
        </section> </div>
        </>
    )
}

export default Time