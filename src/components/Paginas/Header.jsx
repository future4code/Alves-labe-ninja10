import React, { Component } from 'react'
import styled from "styled-components";

export const HeaderEstilizado = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');

    border: 1px solid black;
    background-color: #FFE500;
    padding: 0px 12px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-family: 'Josefin Sans', sans-serif;
    
`

export const TituloHeader = styled.h2`
  
    display: block;
    font-size: 30px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-style:italic;

`

export const BotaoHome = styled.button`
        background-color: white;
        color:black;
        font-family: 'Josefin Sans', sans-serif;
        padding: 8px 25px 8px 25px;
        cursor: pointer;
        &:hover {
            background-color:black;
            color:#FFE500;
            transition: 0.2s;
        }

    

`

export const BotaoCarrinho = styled.button`
        background-color: black;
        color:#FFE500;
        font-family: 'Josefin Sans', sans-serif;
        padding: 8px 25px 8px 25px;
        cursor: pointer;
        &:hover {
            background-color:white;
            color:black;
            transition: 0.2s;
        }
    
`

export default class HeaderPage extends Component {
  render() {
    return (
      
        <HeaderEstilizado>
            <TituloHeader>LabeNinja</TituloHeader>
            <div>
            <BotaoHome onClick={this.props.irParaHome}>Home</BotaoHome>
            <BotaoCarrinho onClick={this.props.irParaCarrinho}>Carrinho</BotaoCarrinho>
            </div>
        </HeaderEstilizado>
    
    )
  }
}
