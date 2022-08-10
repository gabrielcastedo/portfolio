import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { HeaderBody } from "./style";

interface LinkHeader {
  linkLinkedin: string;
  linkGitHub: string;
  linkInsta: string;
}

function Header({ linkLinkedin, linkGitHub, linkInsta }: LinkHeader) {
  return (
    <HeaderBody>
      <div>
        <div>
          <a href={linkLinkedin}>
            <BsLinkedin size={32} color="white" />
          </a>
        </div>
        <div>
          <a href={linkGitHub}>
            <BsGithub size={32} color="white" />
          </a>
        </div>
        <div>
          <a href={linkInsta}>
            <BsInstagram size={32} color="white" />
          </a>
        </div>
      </div>
    </HeaderBody>
  );
}

export default Header;
