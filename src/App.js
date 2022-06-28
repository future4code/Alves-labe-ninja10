import React, { Component } from 'react'
import HeaderPage from './components/HeaderPage'
import HomePage from './components/HomePage'




export default class App extends Component {
  render() {
    return (
      <div>
        <HeaderPage/>
        <HomePage/>
      </div>
    )
  }
}
