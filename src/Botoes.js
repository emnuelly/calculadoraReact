import React, { Component} from 'react';

class Botoes extends Component{
    render() {
        return(
            <div className="botoes">
                <div className="calc-btn operador" onClick={()=>{this.props.apagar()}} id="CE">CE</div>
                <div className="calc-btn operador" onClick={()=>{this.props.CE()}} id="apagar" >C</div>
                <div className="calc-btn operador" onClick={()=> {this.props.back()}} id="">Back</div>
                <div className="calc-btn operador" id="dividir" onClick={()=>{this.props.operador("dividir")}}>/</div>
                <div className="calc-btn" id="7" onClick={()=>{this.props.exibirNaTela(7)}}>7</div>
                <div className="calc-btn" id="8" onClick={()=>{this.props.exibirNaTela(8)}}>8</div>
                <div className="calc-btn" id="9" onClick={()=>{this.props.exibirNaTela(9)}}>9</div>
                <div className="calc-btn operador" id="multiplicar" onClick={()=>{this.props.operador("multiplicar")}}>X</div>
                <div className="calc-btn" id="4" onClick={()=>{this.props.exibirNaTela(4)}}>4</div>
                <div className="calc-btn" id="5" onClick={()=>{this.props.exibirNaTela(5)}}>5</div>
                <div className="calc-btn" id="6" onClick={()=>{this.props.exibirNaTela(6)}}>6</div>
                <div className="calc-btn operador" id="subtrair" onClick={()=>{this.props.operador("subtrair")}}>-</div>
                <div className="calc-btn" id="1" onClick={()=>{this.props.exibirNaTela(1)}}>1</div>
                <div className="calc-btn" id="2" onClick={()=>{this.props.exibirNaTela(2)}}>2</div>
                <div className="calc-btn" id="3" onClick={()=>{this.props.exibirNaTela(3)}}>3</div>
                <div className="calc-btn operador" id="somar" onClick={()=>{this.props.operador("somar")}}>+</div>
                <div className="calc-btn" id=""></div>
                <div className="calc-btn" onClick={()=>{this.props.exibirNaTela(0)}} id="0">0</div>
                <div className="calc-btn" onClick={()=>{this.props.exibirNaTela(".")}} id="ponto">.</div>
                <div className="calc-btn operador" id="resultado" onClick={()=>{this.props.executar()}}>=</div>
            </div>
        )
    }
}

export default Botoes;