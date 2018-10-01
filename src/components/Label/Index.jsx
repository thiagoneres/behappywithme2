import react from 'react'

export default function Label (props){ //para passar o parâmetro props através de atributo ao component (<Label atributo="xxx">)
    return(
        <label for={props.for}>{props.texto}</label> //O atributo for é	 um	 recurso que auxilia no clique do componente associado.
    );
}