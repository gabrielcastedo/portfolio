import Header from "../components/Header/index";
import Card from "../components/Cards";
import Footer from "../components/Footer";
import CardExperience from "../components/CardExperience";
import juno from "../components/img/juno.png";
import aiesec from "../components/img/AIESEC.png";
import Portfolio from "../components/Portfolio";
import {
  ApresentacaoCard,
  Experiencia,
  HomePage,
  HomeStyle,
  Paragrafo,
  HeaderPosition,
  ParagrafoApresentacao,
} from "./style";
import ubeer from "../components/img/ubeer.png";
import kenzieHamburguer from "../components/img/kenzieHamburgueria.png";
import kenzieHub from "../components/img/kenzieHub.png";

function Home() {
  return (
    <HomePage>
      <HeaderPosition>
        <Header
          linkLinkedin="https://www.linkedin.com/in/gabriel-castedo-38145b53/"
          linkGitHub="https://github.com/gabrielcastedo"
          linkInsta="https://www.instagram.com/castedogabriel/"
        />
      </HeaderPosition>
      <ApresentacaoCard>
        <ParagrafoApresentacao>
          <h1>Olá!</h1>
          <h2>Sou Gabriel Castedo,</h2>
          <h3>dev FullStack.</h3>
        </ParagrafoApresentacao>
        <HomeStyle>
          <Card />
        </HomeStyle>
      </ApresentacaoCard>
      <Paragrafo>
        <h2>Experiência</h2>
      </Paragrafo>
      <Experiencia>
        <CardExperience
          anoDeAtuacao="2019-Atualmente"
          nomeEmpresa="Centro Médico Cacoal"
          linkImagem=""
        />
        <CardExperience
          anoDeAtuacao="2016-2017"
          nomeEmpresa="Juno"
          linkImagem={juno}
        />
        <CardExperience
          anoDeAtuacao="2013-2016"
          nomeEmpresa="AIESEC"
          linkImagem={aiesec}
        />
      </Experiencia>
      <Paragrafo>
        <h2>Últimos trabalhos</h2>
      </Paragrafo>
      <Portfolio
        nomeProjeto="Ubeer"
        descricao="Com o intuito de reduzir o número de mortes no trânsito, nossa aplicação permite que alguém que tenha saído com o seu próprio carro, e acabou ingerindo bebidas alcoólicas, possa chamar um de nossos motoristas altamente capacitados para buscar o usuário e seu veículo, e levar os dois em segurança para casa. Com nosso aplicativo acreditamos que podemos deixar o trânsito mais seguro para todos."
        linkProjeto="https://ubeer.vercel.app/"
        imagemTrabalho={ubeer}
      />
      <Portfolio
        nomeProjeto="Kenzie Hub"
        descricao="Ferramenta para adicionar tecnologias e dentro de uma biblioteca. "
        linkProjeto="https://react-entrega-s2-kenzie-hub-gabrielcastedo.vercel.app/"
        imagemTrabalho={kenzieHub}
      />
      <Portfolio
        nomeProjeto="Kenzie Hamburgueria"
        descricao="Ecommerce de Hamburguer na qual o usuário pode adicionar produtos no carrinho e saber o subtotal"
        linkProjeto="https://react-entrega-s1-hamburgueria-da-kenzie-gabrielcastedo.vercel.app/"
        imagemTrabalho={kenzieHamburguer}
      />

      <Footer
        linkLinkedin="https://www.linkedin.com/in/gabriel-castedo-38145b53/"
        linkGitHub="https://github.com/gabrielcastedo"
        linkInsta="https://www.instagram.com/castedogabriel/"
      />
    </HomePage>
  );
}

export default Home;
