import styled from "styled-components";

export const FooterConfig = styled.section`
  margin-top: 50px;
  font-family: poppins, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 20px;
  }

  nav {
    width: 180px;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  h1 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bolder;
  }

  a {
    margin-top: 20px;
    color: #0ee6b7;
  }
`;
