import React from 'react'
import Label from '../Label/Index.jsx'

//definimos o component como classe, pois nele serão armazenados dados(states)
//O valor da propriedade htmlFor ficou como nome,porque este será	o id da	<input>	associada.
//classes do pure.css --> pure-form(define o estilo básico do form) e o pure-form-stacked(posiciona uma tag abaixo da outra)
class NovoUsuario extends React.Component{
    render(){
        return(
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label htmlFor="nome" texto="Quem é você?"></Label> 
                </form>
            </div>

        )
    }

}

export default NovoUsuario;