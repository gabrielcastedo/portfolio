import styled from "styled-components";

export const HeaderBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  div {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  a {
    color: none;
    background-color: none;
  }

  @media (min-width: 800px) {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 50px;
    align-items: center;
    justify-content: space-between;

    div {
      gap: 50px;
    }
  }
`;
