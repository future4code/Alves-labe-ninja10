import React, { Component } from 'react'
import styled from 'styled-components'

export const CarrinhoContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');

border: 1px solid black;
background-color: #FFE500;
padding:9px;
margin:9px;
display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
font-family: 'Josefin Sans', sans-serif;

`

export const BotaoRemover = styled.button`
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

export default class Carrinho extends Component {
  render() {
    return (
      <div>
        <CarrinhoContainer>
            <h3>Devs</h3>
            <p>R$52,00 </p>
            <BotaoRemover onClick={this.props.irParaContratar}>Remover</BotaoRemover>
        </CarrinhoContainer>
      </div>
    )
  }
}
