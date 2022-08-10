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
            <p>Desenvolvedor Full Stack;</p>
          </div>
          <div>
            <h2>Tecnologias: </h2>
            <p>HTML, CSS, JavaScript, Python, React.js, Linux;</p>
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
            <p>Kenzie Academy - Formação Full Stack;</p>
          </div>
          <section> {"}"}</section>
        </nav>
      </BodyCard>
    </CardConfig>
  );
}

export default Card;
