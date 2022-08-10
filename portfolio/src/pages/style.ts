import styled from "styled-components";

export const HomePage = styled.nav`
  margin: 30px;
  @media (min-width: 800px) {
    margin: 30px;
  }
`;

export const HomeStyle = styled.nav`
  @media (min-width: 800px) {
    max-width: 100%;
    width: 700px;
  }
`;

export const Paragrafo = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 20px;
    font-family: poppins, sans-serif;
    text-align: start;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    margin-top: 40px;
    margin-bottom: 40px;

    h2 {
      font-size: 36px;
      font-family: poppins, sans-serif;
      text-align: start;
      font-weight: bold;
    }
  }
`;

export const ApresentacaoCard = styled.section`
  @media (min-width: 800px) {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderPosition = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    display: flex;
    justify-content: end;
  }
`;

export const ParagrafoApresentacao = styled.div`
  font-family: poppins, sans-serif;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-bottom: 30px;

  h1 {
    color: #0ee6b7;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  h2 {
    color: white;
    font-weight: bold;
    margin-bottom: 30px;
  }

  h3 {
    -webkit-text-stroke: 1px #0ee6b7;
    color: #22334c;
    font-size: 30px;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    h1 {
      color: #0ee6b7;
      font-size: 50px;
      margin-top: 30px;
      margin-bottom: 30px;
    }

    h2 {
      color: white;
      font-size: 50px;
      font-weight: bold;
      margin-bottom: 30px;
    }

    h3 {
      -webkit-text-stroke: 1px #0ee6b7;
      color: #22334c;
      font-size: 50px;
      font-weight: bold;
    }
  }
`;

export const Experiencia = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: space-between;
  }
`;
