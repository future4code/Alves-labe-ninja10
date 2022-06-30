import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../../../constants/urls'
import { key } from '../../../constants/key'

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
    state ={
        listjobs:[]
    }


    componentDidMount(){
        this.pegaJob()
    }


    pegaJob = () =>{
        axios.get(`${BASE_URL}/jobs`,{
            headers:{
                Authorization:`${key}`
            }
        }).then((resp)=>{
            console.log(resp.data.jobs)
            this.setState({listjobs:resp.data.jobs})

        }).catch((err) =>{
            console.log(err)
        })
    }


  render() {
    const jobs = this.state.listjobs.map((cards) =>{
            return <CardItem key ={cards.id}>
                <h3>{cards.title}</h3>
                <p><b>Preço: </b>{`R$${cards.price},00`}</p>
                <p><b>Prazo: </b> {cards.dueDate.split('T')[0]} </p>
                <BotaoCards>Ver Detalhes</BotaoCards>
                <BotaoCards>Adicionar Carrinho</BotaoCards>
            </CardItem>
            
    })

    return (
      <CardContainer>
        {jobs}
        </CardContainer>
    )
  }
}
