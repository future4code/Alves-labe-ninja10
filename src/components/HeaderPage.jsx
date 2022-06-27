import React, { Component } from 'react'
import styled from "styled-components";

export const HeaderEstilizado = styled.div`
    border: 1px solid black;
    background-color: gray;
    padding: 0px 12px;
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

export const TituloHeader = styled.h2`
  
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;

`

export default class HeaderPage extends Component {
  render() {
    return (
      
        <HeaderEstilizado>
            <TituloHeader>LabeNinja</TituloHeader>
            <div>
            <button>Home</button>
            <button>Carrinho</button>
            </div>
        </HeaderEstilizado>
    
    )
  }
}
