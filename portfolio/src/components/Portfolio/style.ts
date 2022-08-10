import styled from "styled-components";

export const BodyPortfolio = styled.section`
  display: flex;
  flex-direction: column;
  font-family: poppins, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  margin-top: 50px;

  img {
    width: 100%;
  }

  h1 {
    font-size: 20;
    font-weight: bold;
    margin-top: 7px;
    margin-bottom: 7px;
  }

  p {
    font-size: 16px;
    margin-top: 7px;
  }

  a {
    font-size: 20;
    color: #0ee6b7;
    margin-top: 7px;
  }

  article {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    font-family: poppins, sans-serif;
    font-weight: 400;
    margin-top: 50px;
    gap: 50px;

    div {
      height: 250px;
      display: flex;
      flex-direction: column;
      justify-content: start;
    }

    img {
      width: 450px;
    }

    h1 {
      font-size: 36px;
      font-weight: bold;
      margin-top: 7px;
      margin-bottom: 7px;
    }

    p {
      font-size: 18px;
      margin-top: 7px;
    }

    a {
      font-size: 24px;
      color: #0ee6b7;
      margin-top: 7px;
    }

    article {
    }
  }
`;
