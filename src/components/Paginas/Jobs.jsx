import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { BASE_URL } from '../../constants/urls'
import { key } from '../../constants/key'

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
export const InputBusca = styled.input`
        width: 600px;
        margin-bottom: 40px;
        
        `




export default class Cards extends Component {
    state ={
        listjobs:[], 
        filtroBusca: [],
        minValor: "",
        maxValor: "",
        busca: "",
        ordenacao: "",
    }


    componentDidMount(){
        this.pegaJob()
        this.filtroDeJobs()
    }

    componentDidUpdate(prevProps, prevState){
        if(
            this.state.minValor !== prevState.minValor ||
            this.state.maxValor !== prevState.maxValor ||
            this.state.busca !== prevState.busca ||
            this.state.ordenacao !== prevState.ordenacao
        ) {
            this.filtroDeJobs()
        }
    }

    pegaValorMinimo = (e) => {
        this.setState({minValor: e.target.value})
    }
    
    pegaValorMaximo = (e) => {
        this.setState({maxValor: e.target.value})
    }
    
    pegaBusca = (e) => {
        this.setState({busca: e.target.value})
    }
    
    pegaOrdem = (e) => {
        this.setState({ordenacao: e.target.value})
    }
    


    pegaJob = () =>{
        axios.get(`${BASE_URL}/jobs`,{
            headers:{
                Authorization:`${key}`
            }
        }).then((resp)=>{
            this.setState({listjobs:resp.data.jobs,filtroBusca:resp.data.jobs})

        }).catch((err) =>{
            console.log(err)
        })
    }

    filtroDeJobs = () => {
        const maximum = this.state.maxValor ? Number(this.state.maxValor) : Infinity
        const minimum = this.state.minValor ? Number(this.state.minValor) : -Infinity
      
        const novaListaDeJobs = this.state.listjobs
            .filter((job) => job.price >= minimum)
            .filter((job) => job.price <= maximum)
            .filter((job) => {
                const jobTitulo = job.title.toLowerCase()
                const jobDescricao = job.description.toLowerCase()
                const textoBusca = this.state.busca.toLocaleLowerCase()
                return jobTitulo.includes(textoBusca) || jobDescricao.includes(textoBusca)
            }).sort((a, b) => {
                switch (this.state.ordenacao){
                    case "Menor Valor":
                        return a.price - b.price
                    case "Maior Valor":
                        return b.price - a.price
                    case "Título":
                        return a.title.localeCompare(b.title)
                    case "Prazo":
                        return a.dueDate.localeCompare(b.dueDate)
                    default:
                        return "Erro"
                }
            })
      
        this.setState({filtroBusca: novaListaDeJobs})
      }


  render() {
    const jobs = this.state.filtroBusca.map((cards) =>{
            return <CardItem key ={cards.id} card={cards}>
                <h3>{cards.title}</h3>
                <p><b>Preço: </b>{`R$${cards.price},00`}</p>
                <p><b>Prazo: </b> {cards.dueDate.split('T')[0]} </p>
                <BotaoCards>Ver Detalhes</BotaoCards>
                <BotaoCards>Adicionar Carrinho</BotaoCards>
            </CardItem>
            
    })

    return (
        <div>
        <ContainerInputs>
          <InputValores>
            <InputContratar 
            placeholder='Valor Mínimo' 
            type='number' 
            value={this.state.minValor}
            onChange={this.pegaValorMinimo}/>
            <InputContratar
             placeholder='Valor Maximo' 
             type='number' 
             value={this.state.maxValor}
             onChange={this.pegaValorMaximo}/>
          </InputValores>
          <InputBusca placeholder='Busca por Título' 
          value={this.state.busca}
          onChange={this.pegaBusca}/>
          <SelecContratar value={this.state.ordenacao}
          onChange={this.pegaOrdem}>
            <option>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Titulo</option>
            <option>Prazo</option>
          </SelecContratar>
        </ContainerInputs>
      
        
      <CardContainer>
        {jobs}
        </CardContainer>
    </div>
    )
  }
}
