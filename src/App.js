import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import Loja from "./componentes/Loja";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Ibirapuera',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Praia Grande',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Foz do Iguaçu',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'São Bernardo do Campo',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Vila Lobos',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Avenida Paulista',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Nove de Julho',
      cor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: '16',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rayssa Buarque Malheiros',
      cargo: '14',
      imagem: 'https://media.licdn.com/dms/image/D4D03AQG7E0xZoTm51w/profile-displayphoto-shrink_800_800/0/1687810108969?e=2147483647&v=beta&t=v7GnN2N8mtE8ZoqsLZ2hhclE4_ZtUjoT7JyeSyIobUw',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Maria Clara Penninck',
      cargo: '66',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9E_GLPZK1ftfVYY8DbymGO7IeSjfHxqEJdmOg0yywA2GOHf_gRbacdl2jiISVy3pgZgU&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Maria Luiza Fernandes',
      cargo: '22',
      imagem: 'https://media.licdn.com/dms/image/D4D03AQH7OdjPkF8q0Q/profile-displayphoto-shrink_800_800/0/1688344403701?e=2147483647&v=beta&t=NwzmA5NLo_0Kq6cV1tY7m5iC_o1pBmNJRAySpFjJFV8',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Giovanna Gonzales',
      cargo: '11',
      imagem: 'https://media.licdn.com/dms/image/D4D03AQE7bufMFOB2Hg/profile-displayphoto-shrink_800_800/0/1677600575003?e=1701907200&v=beta&t=zUjMBCj6Ly_lUzPhggSrSYwlQnvuws66_wUwJXaFvgY',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: '444',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: '22',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: '24',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: '23',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: '66',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: '12',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: '32',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: '11',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: '61',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: '55',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: '33',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: '16',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: '78',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: '53',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: '123',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: '55',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: '22',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: '22',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: '2',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador (id) {
    setColaboradores(colaboradores.filter(colaboradores => colaboradores.id !== id))
  }

  function mudarCorDoTime (cor, id){
    setTimes(times.map(time => {
      if (time.id === id ){
        time.cor = cor;
      }
        return time;
    }));
  }

  function cadastrarTime (novoTime) {
    setTimes([ ...times, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div>
    <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/loja" element={<Loja />}/>
          <Route path="/" element={
            <>
              <Banner></Banner>
              <Formulario 
                cadastrarTime={cadastrarTime}
                times={times.map(time => time.nome)} 
                aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
                />
              <section className="times">
                <h1>Minha organização</h1>
                {times.map((time, indice) => 
                  <Time 
                    aoFavoritar={resolverFavorito}
                    mudarCor = {mudarCorDoTime}
                    key={indice}
                    time={time}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
                    aoDeletar={deletarColaborador}
                  />
                  )}
              </section>
              <Rodape />
            </>
          }>
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
