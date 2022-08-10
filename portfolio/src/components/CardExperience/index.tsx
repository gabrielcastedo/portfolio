import React from "react";
import {
  CardExperienceConfig,
  MiniHeader,
  ButtonColor,
} from "../CardExperience/style";

interface NameLinkImage {
  anoDeAtuacao: string;
  nomeEmpresa: string;
  linkImagem: string;
}

function CardExperience({
  anoDeAtuacao,
  nomeEmpresa,
  linkImagem,
}: NameLinkImage) {
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
    </CardExperienceConfig>
  );
}

export default CardExperience;
