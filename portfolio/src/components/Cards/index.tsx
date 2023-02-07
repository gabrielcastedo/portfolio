import React from "react";
import { CardConfig, ButtonColor, MiniHeader, BodyCard } from "./style";

function Card() {
  return (
    <CardConfig>
      <MiniHeader>
        <div>
          <ButtonColor color="#FF5F56"></ButtonColor>
          <ButtonColor color="#FFBD2E"></ButtonColor>
          <ButtonColor color="#27C93F"></ButtonColor>
        </div>
        <section>
          <p>gabrielcastedo.com</p>
        </section>
      </MiniHeader>

      <BodyCard>
        <nav>
          <section>
            <h1>.SobreMim {"()"}</h1>
            <p> {"{"}</p>
          </section>
          <div>
            <h2>Profissão:</h2>
            <div className="divMaquideEscrever">
              <p className="maquinaDeEscrever">Desenvolvedor Full Stack;</p>
            </div>
          </div>
          <div>
            <h2>Tecnologias: </h2>
            <div className="divMaquideEscrever">
              <p className="maquinaDeEscrever2">JavaScript, TypeScript, React, Salesforce, Python, Linux;</p>
            </div>
          </div>
          <section>{"}"}</section>
        </nav>
        <nav>
          <section>
            <h1>.Educação {"()"}</h1>
            <p> {"{"}</p>
          </section>
          <div>
            <h2>Cursos: </h2>
            <div className="divMaquideEscrever">
              <p className="maquinaDeEscrever3">Kenzie Academy - Formação Full Stack;</p>
            </div>
          </div>
          <section> {"}"}</section>
        </nav>
      </BodyCard>
    </CardConfig>
  );
}

export default Card;
