import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { key } from '../../constants/key'


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

  state = {

    titulo: "",
    descricao: "",
    preco: "",
    pagamento: [],
    data: ""
  }

  pegaTitulo = (e) => {
    this.setState({ titulo: e.target.value })
  }

  pegaDescrição = (e) => {
    this.setState({ descricao: e.target.value })
  }

  pegaPreço = (e) => {
    this.setState({ preco: e.target.value })
  }

  pegaData = (e) => {
    this.setState({ data: e.target.value })
  }

  pegaPagamento = (e) => {
    const value = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({ pagamento: value })
  }

  CadastrarServico = () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.pagamento,
      dueDate: this.state.data

    }

    axios.post(`${BASE_URL}/jobs`, body, {
      headers: {
        Authorization: `${key}`
      }
    }).then((resp) => {
      alert(`O serviço ${this.state.titulo} foi criado com sucesso!`)
      this.setState({
        titulo: "",
        descricao: "",
        preco: "",
        pagamento: [],
        data: ""

      })

    }).catch((err) => {
      alert("Erro ao Cadastrar Serviço")
    })
  }



  render() {
    return (
      <Container>
        <TituloCadastro>Cadastre o seu serviço</TituloCadastro>
        <InputCadastro placeholder='Titulo'
          value={this.state.titulo}
          onChange={this.pegaTitulo} />
        <InputCadastro placeholder='Descrição'
          value={this.state.descricao}
          onChange={this.pegaDescrição} />
        <InputCadastro placeholder='Preço' type='number'
          value={this.state.preco}
          onChange={this.pegaPreço} />
        <SelecCadastro multiple
          value={this.state.pagamento} onChange={this.pegaPagamento}>
          <option>Cartão de Debito</option>
          <option>Cartão de Crédito</option>
          <option>Paypal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </SelecCadastro>

        <InputCadastro placeholder='Prazo do Serviço' type='date'
          value={this.state.data}
          onChange={this.pegaData} />
        <BotaoCastrar onClick={this.CadastrarServico}>Cadastrar</BotaoCastrar>
      </Container>
    )
  }
}
