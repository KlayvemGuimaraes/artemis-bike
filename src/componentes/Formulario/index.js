import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    // Colaborador
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    // Equipe
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    const [kmsTime, setKmsTime] = useState('')
    const [indTime, setIndTime] = useState('')
    const [urlTime, setUrlTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, cargo, imagem, time )
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha seus dados para se juntar a uma nova trilha!</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Idade' 
                    placeholder='Digite a sua idade'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Trilhas'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Inscrever!' />
            </form>

            <form className="formulario" onSubmit={(evento => {
                evento.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime, kms: kmsTime, indicacao: indTime, url: urlTime})
            })}>
                <h2>Preencha os dados para criar uma nova trilha!</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o destino da trilha'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    label='Distância'
                    placeholder='Digite quantos Kms a trilha percorre'
                    valor={kmsTime}
                    aoAlterado={valor => setKmsTime(valor)}
                />
                <Campo
                    obrigatorio
                    label='Indicação'
                    placeholder='Adicione uma indicação de nível de ciclista'
                    valor={indTime}
                    aoAlterado={valor => setIndTime(valor)}
                />
                <Campo
                    obrigatorio
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={urlTime}
                    aoAlterado={valor => setUrlTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Mostre me a cor da trilha!'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar uma nova Trilha' />
            </form>
        </section>
    )
}

export default Formulario