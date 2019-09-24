import './App.css';
import React, { Component } from 'react';
import Resultado from './Resultado';
import Botoes from './Botoes';
import { join } from 'path';




class App extends Component {

  state = {
    tela: "",
    operador: '',
    memoria: "",
    apagar: "",
    temVirgula: false,
    temResultado: true,
    historico: []

  }



  exibirNaTela = (valor) => {
    let tVirgula = this.state.temVirgula;
    if(tVirgula && valor === "."){
      return;
    } else if(!tVirgula && valor ==="."){
      tVirgula = true;
    } 

    let v = this.state.tela;
    this.setState({
      tela: v + valor,
      temVirgula: tVirgula
    })
  }

  operador = (operador) => {
    if(this.state.tela === ''){
      return
    }
    let valorAnterior = this.state.tela;
    this.setState({
      tela: "",
      operador: operador,
      memoria: valorAnterior,
      temVirgula: false
    })

  }

  executar = () => {
    if(this.state.tela === ''){
      return
    }
    let valorAnterior = this.state.tela;
    let memoria = this.state.memoria;
    let operador = this.state.operador;
    let resultadoDaConta = 0;
    let hist = this.state.historico;

    if (operador === 'somar') {
      resultadoDaConta = (parseFloat(memoria) + parseFloat(valorAnterior)).toString();
    } else if (operador === 'subtrair') {
      resultadoDaConta = (parseFloat(memoria) - parseFloat(valorAnterior)).toString();
    } else if (operador === 'multiplicar') {
      resultadoDaConta = (parseFloat(memoria) * parseFloat(valorAnterior)).toString();
    } else if (operador === 'dividir') {
      resultadoDaConta = (parseFloat(memoria) / parseFloat(valorAnterior)).toString();
    }

    hist.push(resultadoDaConta)
    this.setState({
      tela: resultadoDaConta,
      memoria:"",
      temResultado:true,
      historico: hist
    })

  }

  apagar = () => {
    this.setState({
      tela: "",
      operador: '',
      memoria: "",
      apagar: "",
      temResultado: false
    })
  }

  limparTela = () =>{
    this.setState({
      tela: "",
      temVirgula: false
    })
  }
  apagarUltimo = () =>{
    let atual = this.state.tela;
    atual = atual.toString().slice(0,-1);
    this.setState({
      tela: atual
    })
  }





  render() {
    return <div className="App">
      <div className="container" >
        <Resultado valor={this.state.tela} operador={this.operador} />
        <Botoes back={this.apagarUltimo} CE={this.limparTela} executar={this.executar} apagar={this.apagar} operador={this.operador} exibirNaTela={this.exibirNaTela} valor={this.state.tela} />
        <div>
           Historico: {this.state.historico.join(", ")}
   </div>
      </div>
    </div>
  }
}

export default App;
