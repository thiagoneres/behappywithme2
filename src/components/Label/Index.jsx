import React from 'react'

export default function Label (props){ //para passar o parâmetro props através de atributo ao component (<Label atributo="xxx">)
    const estilo = {
        color: props.valorInvalido ? '#d50000' : 'ff0000' // if ternário
    }

    return(
        <label
            style={estilo}
            htmlFor={props.htmlFor}>
            {props.texto}
        </label> //O atributo for é	 um	 recurso que auxilia no clique do componente associado.
    );
}