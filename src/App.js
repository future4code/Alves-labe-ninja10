import React, { Component } from 'react'
import Header from './components/Paginas/Header'
import Home from './components/Paginas/Home'
import Cadastro from './components/Paginas/Cadastro'
import Carrinho from './components/Paginas/Carrinho'
import Contratar from './components/Paginas/TelaContratar/Contratar'





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
        return <Carrinho/>
      case 'contratar':
        return <Contratar/>
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

  render() {
    return (
      <div>
        <Header irParaHome ={this.telaHome} irParaCarrinho ={this.telaCarrinho}/>
        {this.escolherTela()}
        
      
      </div>
    )
  }
}
