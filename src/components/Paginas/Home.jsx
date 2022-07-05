import React, { Component } from "react";
import styled from "styled-components";
import logoTela from "../../img/logoTela.jpg";

export const LogoNinja = styled.img`
  width: 20%;
`;

export const Home = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap");
  width: 100vw;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin-top: 80px;
`;
export const TituloHome = styled.h1`
  font-family: "Josefin Sans", sans-serif;
`;
export const SubtituloHome = styled.h3`
  font-family: "Josefin Sans", sans-serif;
`;

export const ContainerBotao = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: "Josefin Sans", sans-serif;
`;

export const BotaoNinja = styled.button`
  background-color: #ffe500;
  color: black;
  font-family: "Josefin Sans", sans-serif;
  margin: 10px;
  padding: 8px 25px 8px 25px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
    transition: 0.7s;
  }
`;

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Home>
        <LogoNinja src={logoTela} />
          <TituloHome>LabeNinja</TituloHome>
          <SubtituloHome>O talento certo no momento certo</SubtituloHome>
          <ContainerBotao>
            <BotaoNinja onClick={this.props.irParaCadastro}>
              Quero ser um Ninja
            </BotaoNinja>
            <BotaoNinja onClick={this.props.irParaContratar}>
              Contratar um Ninja
            </BotaoNinja>
          </ContainerBotao>
        </Home>
      </div>
    );
  }
}
