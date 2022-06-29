import React, { Component } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`
export const TituloCadastro = styled.h1`
    font-family: 'Josefin Sans', sans-serif;

`

export const InputCadastro = styled.input`
    width: 300px;
    margin-bottom: 12px;
`
export const SelecCadastro = styled.select`
  width: 308px;
  margin-bottom: 12px;
`

export const BotaoCastrar = styled.button`
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

export default class Cadastro extends Component {
  render() {
    return (
      <Container>
        <TituloCadastro>Cadastre o seu serviço</TituloCadastro>
        <InputCadastro placeholder ='Titulo'/>
        <InputCadastro placeholder ='Descrição'/>
        <InputCadastro placeholder ='Preço' type ='number'/>
        <SelecCadastro multiple>
          <option>Cartão de Debito</option>
          <option>Cartão de Crédito</option>
          <option>Paypal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </SelecCadastro>
        <InputCadastro placeholder ='Prazo do Serviço' type ='date'/>
        <BotaoCastrar>Cadastrar</BotaoCastrar>
      </Container>
    )
  }
}
