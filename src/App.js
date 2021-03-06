import React, { Component } from 'react'
import Header from './components/Paginas/Header'
import Home from './components/Paginas/Home'
import Cadastro from './components/Paginas/Cadastro'
import Carrinho from './components/Paginas/Carrinho'
import Jobs from './components/Paginas/Jobs'
import Detalhes from './components/Paginas/Detalhes'
import axios from 'axios'

const body = {
  name: "projeto-labe-ninja"
}

axios.post(" https://labeninjas.herokuapp.com",body,{
  headers:{
    Authorization: "3be8ffbf-eaa1-4997-bfb3-8228a631e389"
  }   
})




export default class App extends Component {

  state={
    telaAtual:"home"
  }

  escolherTela = () => {
    switch(this.state.telaAtual){
      case 'home':
        return <Home irParaCadastro= {this.telaCadastro} irParaContratar ={this.telaContratar}/>
      case 'cadastro':
        return <Cadastro/>
      case 'carrinho':
        return <Carrinho irParaContratar ={this.telaContratar}/>
      case 'contratar':
        return <Jobs irParaDetalhes ={this.telaDetalhes} irParaCarrinho ={this.telaCarrinho}/>
      case 'detalhes':
        return <Detalhes irParaContratar ={this.telaContratar}/>
      default:
        return <Home/>

    }

  }
  
  telaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
  }

  telaCarrinho = () =>{
    this.setState({telaAtual:"carrinho"})
  }

  telaContratar = () =>{
    this.setState({telaAtual:"contratar"})
  }

  telaHome = () =>{
    this.setState({telaAtual:"home"})
  }

  telaDetalhes = () => {
    this.setState({telaAtual:"detalhes"})
  }

  render() {
    return (
      <div>
        <Header irParaHome ={this.telaHome} irParaCarrinho ={this.telaCarrinho}/>
        {this.escolherTela()}
        
      
      </div>
    )
  }
}
