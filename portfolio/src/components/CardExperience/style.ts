import styled from "styled-components";

export const CardExperienceConfig = styled.section`
  width: 100%;
  height: 379px;
  border-radius: 15px;
  background-image: linear-gradient(#171a1b, #22334c);

  div {
    margin-top: 40px;
    font-size: 24px;
    color: white;
    font-family: fira-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    margin-top: 50px;
    max-width: 150px;
    max-height: 150px;
  }

  @media (min-width: 800px) {
    max-width: 400px;
    height: 500px;
    border-radius: 15px;
    background-image: linear-gradient(#171a1b, #22334c);

    div {
      margin-top: 40px;
      font-size: 30px;
      color: white;
      font-family: fira-sans, sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    img {
      margin-top: 50px;
      max-width: 250px;
      max-height: 250px;
    }
  }
`;

export const MiniHeader = styled.section`
  display: flex;
`;

export const ButtonColor = styled.button`
  margin-left: 8px;
  border-radius: 90px;
  border: 0.5rem;
  border-color: black;
  margin-top: 8px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => props.color};
`;
