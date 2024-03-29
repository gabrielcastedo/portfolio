import styled from "styled-components";

export const CardConfig = styled.section`
  width: 100%;
  max-width: 862px;
  height: 356px;
  border-radius: 14px;
  background-color: #171a1b;
  border: 2px;
  border-color: grey;

  @media (min-width: 800px) {
    width: 100%;

    height: 356px;
    border-radius: 14px;
    background-color: #171a1b;
    border: 2px;
    border-color: grey;
  }
`;

export const MiniHeader = styled.section`
  display: flex;

  div {
    margin-left: 20px;
  }

  section {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 160px;
    height: 14px;
    background-color: #4a4a4a;
    border-radius: 6px;
    margin-top: 8px;
  }
  p {
    font-size: 11px;
    color: white;
    font-family: fira-sans, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

export const BodyCard = styled.div`
  display: flex;
  flex-flow: column;
  text-align: start;
  margin-left: 20px;
  font-family: fira-sans, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;

  nav {
    margin-top: 20px;
  }

  section {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  h1 {
    color: #7000ff;
  }
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
  }

  h2 {
    color: #0ee6b7;
  }

  p {
    color: #ffffff;
    margin-left: 8px;
    display: flex;
    flex-wrap: wrap;
  }

  .divMaquideEscrever{
    display: flex;
    flex-wrap: wrap;
  }

  .maquinaDeEscrever {
    overflow: hidden;
    border-right: .15em solid orange;
    height: auto;
    white-space: nowrap;
    font-size: 14px;
    width: 0;
    animation: 
      typing 2s steps(20, end) forwards,
      blink .8s infinite;

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink {
      from { border-color: transparent }
      to { border-color: orange; }
    }
  }

  .maquinaDeEscrever2 {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    border-right: .15em solid orange;
    height: auto;
    white-space: nowrap;
    font-size: 14px;
    width: 0;
    animation: 
      typing 2s steps(20, end) forwards,
      blink .8s infinite;

    animation-delay: 2s;
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink {
      from { border-color: transparent }
      to { border-color: orange; }
    }
  }

  .maquinaDeEscrever3 {
    overflow: hidden;
    border-right: .15em solid orange;
    height: auto;
    white-space: nowrap;
    font-size: 14px;
    width: 0;
    animation: 
      typing 2s steps(20, end) forwards,
      blink .8s infinite;
    animation-delay: 4s;

    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    @keyframes blink {
      from { border-color: transparent }
      to { border-color: orange; }
    }
  }
`;

export const ButtonColor = styled.button`
  border-radius: 100%;
  margin-right: 8px;
  border: 0.5px;
  border-color: #171a1b;
  margin-top: 8px;
  width: 8px;
  height: 12px;
  background-color: ${(props) => props.color};
`;
