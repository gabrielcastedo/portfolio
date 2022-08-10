import React from "react";
import { FooterConfig } from "./style";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

interface LinkHeader {
  linkLinkedin: string;
  linkGitHub: string;
  linkInsta: string;
}

function Footer({ linkLinkedin, linkGitHub, linkInsta }: LinkHeader) {
  return (
    <FooterConfig>
      <h2>Gostaria de ter o seu contato</h2>
      <nav>
        <a href={linkLinkedin}>
          <BsLinkedin size={30} color="white" />
        </a>
        <a href={linkGitHub}>
          <BsGithub size={30} color="white" />
        </a>
        <a href={linkInsta}>
          <BsInstagram size={30} color="white" />
        </a>
      </nav>

      <h1>Você tem algum projeto em mente ? </h1>
      <a href="gabriel.castedo1@gmail.com">gabriel.castedo1@gmail.com</a>
    </FooterConfig>
  );
}

export default Footer;
