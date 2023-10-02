import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import NavBar from "./componentes/NavBar";
import Loja from "./componentes/Loja";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      nome: 'Letícia Faria',
      cargo: '26',
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
      nome: 'Mariane Silveira',
      cargo: '36',
      imagem: 'https://a-static.mlcdn.com.br/450x450/oculos-de-sol-feminino-quadrado-dourado-square-luxo-degrade-omg/brumelles/ocf4/d8eea36312a2d9b3cc62ddc3090c06f3.jpeg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Giovana Lima',
      cargo: '19',
      imagem: 'https://i.pinimg.com/474x/85/08/56/8508561ef5434e9cdefa1d7b1dbdb929.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jéssica Magalhães',
      cargo: '24',
      imagem: 'https://media.muckrack.com/profile/images/14623442/jazmine-denise-thompson.jpeg.256x256_q100_crop-smart.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Luana Rodrigues',
      cargo: '23',
      imagem: 'https://pbs.twimg.com/profile_images/715942864212135937/GsDA88Di_400x400.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Maiara Gronchi',
      cargo: '23',
      imagem: 'https://styles.redditmedia.com/t5_43bmb6/styles/communityIcon_8asm10i74w171.png',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lara Moreira',
      cargo: '17',
      imagem: '	https://i.pinimg.com/474x/d9/fe/78/d9fe78378fdcfc25b04fca9d3cf12d5f.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Caroline Ayres',
      cargo: '32',
      imagem: 'https://media.licdn.com/dms/image/C4D03AQF0BfEndHNJEg/profile-displayphoto-shrink_800_800/0/1632672346592?e=2147483647&v=beta&t=RUSlDuV_yQYBgWShLsuK7zFAoZ85FHvroQbG5DPyU3c',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Beatriz Suzano',
      cargo: '27',
      imagem: 'https://i.pinimg.com/474x/ff/9f/99/ff9f9900ef35162fac837627603c422e.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Karine Ferreira',
      cargo: '19',
      imagem: 'https://i.pinimg.com/474x/fb/b9/18/fbb918ffd6c486716083ecd904568cb1.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lorena Bulgario',
      cargo: '20',
      imagem: '	https://a.wattpad.com/useravatar/VitoriaFreitas074.256.540469.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fabiana Rocha',
      cargo: '33',
      imagem: 'https://cdn.domestika.org/c_fill,dpr_auto,f_auto,h_256,pg_1,t_base_params,w_256/v1580405423/avatars/001/607/505/1607505-original.jpg?1580405423',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Maria Lúcia Ribeiro',
      cargo: '17',
      imagem: 'https://akamai.sscdn.co/uploadfile/cifraclub/avatar/0/5/4di14sv61c4.jpg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Felícia Matarazzo',
      cargo: '28',
      imagem: 'https://media.muckrack.com/profile/images/7144760/juliene-moretti.jpeg.256x256_q100_crop-smart.jpg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Bruna Soares',
      cargo: '33',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrY6qS5uFXeyuOjwGKcgm43xG7kvkKGASd-Q&usqp=CAU',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Paula Fernandes',
      cargo: '28',
      imagem: 'https://akamai.sscdn.co/uploadfile/cifraclub/avatar/5/0/4dfyab63w1a.jpg',
      time: times[4].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Fernanda Moraes',
      cargo: '15',
      imagem: 'https://a.wattpad.com/useravatar/Esposa_da_Camila.256.757929.jpg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Simone Penninck',
      cargo: '32 - Cicloativista',
      imagem: 'https://pbs.twimg.com/profile_images/1499160593101733898/7wc8fKd0_400x400.jpg',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Melissa Soares',
      cargo: '22',
      imagem: '	https://lh3.googleusercontent.com/a-/AOh14GidH7tJTFZZbxodTsufqQr5CeIp62hj9nAGzAgz',
      time: times[5].nome
    },
    { 
      id: uuidv4(),
      favorito: false,
      nome: 'Julia da Silveira',
      cargo: '20',
      imagem: 'https://akamai.sscdn.co/uploadfile/cifraclub/avatar/7/9/4cj5l55qu4k.jpg',
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
            </>
          }>
              </Route>
            </Routes>
        </BrowserRouter>
        <Rodape />
    </div>
  );
}

export default App;
