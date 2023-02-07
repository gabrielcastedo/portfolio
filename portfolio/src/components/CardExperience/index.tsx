import React from "react";
import {
  CardExperienceConfig,
  MiniHeader,
  ButtonColor,
  DescricaoStyle,
} from "../CardExperience/style";

interface NameLinkImage {
  anoDeAtuacao: string;
  nomeEmpresa: string;
  linkImagem: string;
  descricao?: string;
}

function CardExperience({
  anoDeAtuacao,
  nomeEmpresa,
  linkImagem,
  descricao
}: NameLinkImage) {
  let arrayDescricao : Array<string> = []

  if (descricao) {
    arrayDescricao = descricao.split('; ');
  } 

  return (
    <CardExperienceConfig>
      <MiniHeader>
        <ButtonColor color="#FF5F56"></ButtonColor>
        <ButtonColor color="#FFBD2E"></ButtonColor>
        <ButtonColor color="#27C93F"></ButtonColor>
      </MiniHeader>

      <div>
        <h1>{anoDeAtuacao}</h1>
        <h1>{nomeEmpresa}</h1>
        <img src={linkImagem} alt="" />
      </div>
      {descricao ? 
      <DescricaoStyle> 
        <h2>Descrição</h2>
        {arrayDescricao.map((elemento) => 
          <p>- {elemento}</p>
        )}
      </DescricaoStyle> : 
      <></>
      }
    </CardExperienceConfig>
  );
}

export default CardExperience;
