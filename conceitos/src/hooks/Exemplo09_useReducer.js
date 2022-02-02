// Importar modulos
import React, { useReducer } from 'react';

// Funcao
function Exemplo09_useReducer() {

    // Funcao para incrementar e decrementar
    const funcao = (state, acao) => {

        switch(acao) {
            case 'incrementar':
            return state + 1;

            case 'decrementar':
            return state - 1;

            default:
            return 0;

        }

    }

    // useReducer
    const [contador, executarFuncao] = useReducer(funcao, 0);

    // Retorno
    return(
        <div>
            <h1>{ contador }</h1>

            <button onClick={ e => executarFuncao('incrementar') }>Incrementar</button>
            <button onClick={ e => executarFuncao('decrementar')}>Decrementar</button>
        </div>
    );
}

// Exportar
export default Exemplo09_useReducer;