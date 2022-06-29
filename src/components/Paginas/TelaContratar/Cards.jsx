import React, { Component } from 'react'
import styled from 'styled-components'

export const CardContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 12px;
`
export const CardItem = styled.div `
    border: 1px solid black;
    padding: 0px 16px 16px;
    margin: 12px;

`

export const BotaoCards = styled.button`
        background-color: white;
        color:black;
        font-family: 'Josefin Sans', sans-serif;
        padding: 8px;
        cursor: pointer;
        &:hover {
            background-color:black;
            color:#FFE500;
            transition: 0.2s;
        }

    

`


export default class Cards extends Component {
  render() {
    return (
      <CardContainer>
        <CardItem>
            <h3>Pastelaria</h3>
            <p><b>Preço: </b> R$5.00</p>
            <p><b>Prazo: </b> 30/04/2022 </p>
            <BotaoCards>Ver Detalhes</BotaoCards>
            <BotaoCards>Adicionar Carrinho</BotaoCards>
        </CardItem>
        <CardItem>
            <h3>Piloto de Fuga</h3>
            <p><b>Preço: </b>  R$4000.00</p>
            <p><b>Prazo: </b> 31/10/2021 </p>
            <BotaoCards>Ver Detalhes</BotaoCards>
            <BotaoCards>Adicionar Carrinho</BotaoCards>
        </CardItem>
        <CardItem>
            <h3>Vendedor de Calcinhas</h3>
            <p><b>Preço: </b>  R$100.000</p>
            <p><b>Prazo: </b> 31/12/2065</p>
            <BotaoCards>Ver Detalhes</BotaoCards>
            <BotaoCards>Adicionar Carrinho</BotaoCards>
        </CardItem>
        <CardItem>
            <h3>Ateio fogo na caixa d'água</h3>
            <p><b>Preço: </b>  R$100.00</p>
            <p><b>Prazo: </b>  08/08/2021</p>
            <BotaoCards>Ver Detalhes</BotaoCards>
            <BotaoCards>Adicionar Carrinho</BotaoCards>
        </CardItem>
        </CardContainer>
    )
  }
}
