import React, { Component } from 'react'
import styled from 'styled-components'
import Cards from './Cards'

export const ContainerInputs = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 32px 24px 0px;
`

export const InputValores = styled.div`
        display:flex;
        flex-direction:column;
        `

export const InputContratar = styled.input`
    width: 180px;
    margin-bottom: 7px;

`
export const SelecContratar = styled.select`
  width: 180px;
  margin-bottom: 48px;
`
export const InputBusca = styled.input `
        width: 600px;
        margin-bottom: 40px;

`


export default class Contratar extends Component {
  render() {
    return (
      <div>
        <ContainerInputs>
            <InputValores>
            <InputContratar placeholder='Valor Mínimo' type='number'/>
            <InputContratar placeholder='Valor Maximo' type='number'/>
            </InputValores>
            <InputBusca placeholder='Busa por Título'/>
            <SelecContratar>
                <option>Sem Ordenação</option>
                <option>Menor Valor</option>
                <option>Maior Valor</option>
                <option>Titulo</option>
                <option>Prazo</option>
            </SelecContratar>
        </ContainerInputs>
        <Cards/>
      </div>
    )
  }
}
