import React from 'react'
import Label from '../Label/Index.jsx'
import Input from '../Input/Index.jsx'

//definimos o component como classe, pois nele serão armazenados dados(states)
//O valor da propriedade htmlFor ficou como nome,porque este será	o id da	<input>	associada.
//classes do pure.css --> pure-form(define o estilo básico do form) e o pure-form-stacked(posiciona uma tag abaixo da outra)
class NovoUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nome: ''
            },
            validacao: {
                nomeInvalido: false
            }
        };

    }

    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }

    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label
                        htmlFor="nome"
                        texto="Quem	é você?"
                        valorInvalido={this.state.validacao.nomeInvalido}
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        valorInvalido={this.state.validacao.nomeInvalido}
                        defaultValue={this.state.usuario.nome}
                        onChange={this.atualizarNome.bind(this)}
                    />

                </form>
            </div>

        )
    }

}

export default NovoUsuario;