import { BodyPortfolio } from "./style";
import { IoArrowForwardOutline } from "react-icons/io5";

interface PortfolioConfig {
  nomeProjeto: string;
  descricao: string;
  imagemTrabalho: string;
  linkProjeto: string;
}

function Portfolio({
  nomeProjeto,
  descricao,
  imagemTrabalho,
  linkProjeto,
}: PortfolioConfig) {
  return (
    <BodyPortfolio>
      <div>
        <img src={imagemTrabalho} alt="" />
      </div>
      <div>
        <h1>{nomeProjeto}</h1>
        <p>{descricao}</p>
        <article>
          <a href={linkProjeto}>Ver Projeto</a>
          <a href={linkProjeto}>
            <IoArrowForwardOutline size={20} color={"#0ee6b7"} />
          </a>
        </article>
      </div>
    </BodyPortfolio>
  );
}

export default Portfolio;
