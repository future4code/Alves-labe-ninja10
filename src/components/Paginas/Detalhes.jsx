import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { key } from '../../constants/key'

export const DetalheContainer = styled.div`
        display:flex;
        flex-direction:column;
        text-align:center;
        font-family: "Josefin Sans", sans-serif;
        `

export const BotaoVoltar = styled.button`
        background-color:#ffe500;
        color: black;
        font-family: "Josefin Sans", sans-serif;
        padding: 8px 25px 8px 25px;
        cursor: pointer;
        &:hover {
            background-color: black;
            color: #ffe500;
            transition: 0.2s;
  }

`





export default class Detalhes extends Component {
    state = {
        job: {}
    }

    componentDidMount() {
        this.pegaJob()
    }

    pegaJob = () => {
        axios.get(`${BASE_URL}/jobs/06a75e9f-4130-4d84-a890-6783be65857c`, {
            headers: {
                Authorization: `${key}`
            }
        })
            .then((res) => {
                this.setState({ job: res.data })
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const pagamentoComponentes = this.state.job.paymentMethods && this.state.job.paymentMethods.map((pay) => {
            return <li key={pay}>{pay}</li>
        })
        return (
            <DetalheContainer>
                {
                    this.state.job.title && <h1>{this.state.job.title}</h1>
                }
                {
                    this.state.job.price && <p>Preço: R${this.state.job.price.toFixed(2)}</p>
                }
                {
                    this.state.job.dueDate && <p>Prazo: {this.state.job.dueDate.split('T')[0]}</p>
                }
                {
                    this.state.job.description && <p>{this.state.job.description}</p>
                }

                <div>
                    {pagamentoComponentes}
                    <BotaoVoltar onClick={this.props.irParaContratar}>Voltar para a Lista</BotaoVoltar>
                </div>
                

            </DetalheContainer>


        )
    }
}
