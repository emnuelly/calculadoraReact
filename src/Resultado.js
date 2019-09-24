import React, { Component} from 'react';



class Resultado extends Component{
    render() {
        console.log(this.props)
        return(
            <div className="resultado">
                <p>{this.props.valor}</p>
                
            </div>
        )
    }
}

export default Resultado;