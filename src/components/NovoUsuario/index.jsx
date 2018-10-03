import React from 'react'
import Label from '../Label/Index.jsx'
import Input from '../Input/Index.jsx'
import GenderSelector from '../GenderSelector/Index.jsx'
import Usuario from '../../models/Usuario'
import Button from '../Button/Index.jsx'

//definimos o component como classe, pois nele serão armazenados dados(states)
//O valor da propriedade htmlFor ficou como nome,porque este será	o id da	<input>	associada.
//classes do pure.css --> pure-form(define o estilo básico do form) e o pure-form-stacked(posiciona uma tag abaixo da outra)
class NovoUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: new Usuario(),
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            },
            primeiraVisaoCompleta: false
        };

    }

    atualizarNome(e) {
        let usuario = this.state.usuario;
        usuario.nome = e.target.value;
        this.setState({
            usuario: usuario
        });
    }

    atualizarGenero(e, genero) {
        e.preventDefault();
        let usuario = this.state.usuario;
        usuario.genero = genero;
        this.setState({
            usuario: usuario
        });
    }

    validar(e) {
        e.preventDefault();
        let usuario = this.state.usuario;
        let validacao = this.state.validacao;
        validacao.nomeInvalido = !usuario.validarNome();
        validacao.generoInvalido = !usuario.validarGenero();
        let mensagem = '';
        let primeiraVisaoCompleta = false;
        if (validacao.nomeInvalido && validacao.generoInvalido) {
            mensagem = 'Os	campos	nome	e	gênero	estão	inválidos!'
        } else if (validacao.nomeInvalido) {
            mensagem = 'Seu	nome	está	inválido!'
        } else if (validacao.generoInvalido) {
            mensagem = 'Selecione	seu	gênero!'
        } else {
            primeiraVisaoCompleta = true;
        }
        if (!primeiraVisaoCompleta) {
            this.props.erro(mensagem);
        }
        this.setState({
            validacao: validacao,
            primeiraVisaoCompleta: primeiraVisaoCompleta
        });
    }

    renderizarNome() {
        return (
            <section>
                <Label
                    htmlFor="nome"
                    texto="Quem é você?"
                    valorInvalido={this.state.validacao.nomeInvalido}
                />
                <Input
                    id="nome"
                    placeholder="Digite seu nome"
                    maxLength="40"
                    readOnly={this.state.primeiraVisaoCompleta}
                    valorInvalido={this.state.validacao.nomeInvalido}
                    defaultValue={this.state.usuario.nome}
                    onChange={this.atualizarNome.bind(this)}
                />
            </section>
        )
    }


    renderizarGenero() {
        if (this.state.primeiraVisaoCompleta) {
            return null
        } else {
            return (
                <section>
                    <Label
                        texto="Seu	gênero:"
                        valorInvalido={this.state.validacao.generoInvalido}
                    />
                    <GenderSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        atualizarGenero={this.atualizarGenero.bind(this)}
                    />
                </section>
            )
        }
    }

    renderizarBotoes() {
        if (this.state.primeiraVisaoCompleta) {
            return (
                <section>
                    <Button
                        texto="Voltar"
                        onClick={e => {
                            e.preventDefault();
                            this.setState({
                                primeiraVisaoCompleta: false
                            });
                        }}
                    />
                    <Button
                        principal
                        texto="Salvar"
                    />
                </section>
            )
        } else {
            return (
                <section>
                    <Button
                        principal
                        texto="Próximo"
                        onClick={this.validar.bind(this)}
                    />
                </section>
            )
        }
    }

    render() {
        return (
            <div className="center">

                <form className="pure-form	pure-form-stacked">
                    {this.renderizarNome()}
                    {this.renderizarGenero()}
                    {this.renderizarBotoes()}
                </form>
            </div>

        )
    }

}

export default NovoUsuario;