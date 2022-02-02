// Importar modulos
import React, { useRef } from 'react';

// Funcao
function Exemplo08_useRef() {

    // useRef
    const elemento = useRef();

    // Funcao
    const acao = () => {
        elemento.current.focus();
        elemento.current.style.backgroundColor = 'red';
        elemento.current.value = 'Digite algo...';
    }

    // Retorno
    return(
        <div>
            <input type='text' ref={ elemento } />
            <input type='button' value='Clique aqui' onClick={ acao } />
        </div>
    );

}

// Exportar
export default Exemplo08_useRef;