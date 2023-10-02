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
                <Botao texto='Criar passeio' />
            </form>

            <form className="formulario" onSubmit={(evento => {
                evento.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime})
            })}>
                <h2>Preencha os dados para criar uma nova aventura!</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o destino da trilha'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Mostre me a cor da trilha!'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar um novo passeio' />
            </form>
        </section>
    )
}

export default Formulario