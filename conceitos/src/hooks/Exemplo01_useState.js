// Importar modulo React e o hook useState
import React, { useState } from 'react';

// Funcao
function Exemplo01_useState() {

    // useState
    const[texto, setTexto] = useState('Hello Word');

    // Evento
    const evento = (e) => {
        setTexto(e.target.value);
    }

    //Retorno
    return(
        <div>
            <input type='text' onChange={ evento } />
            <p>{ texto }</p>
        </div>
    )
}

// Exportar
export default Exemplo01_useState;