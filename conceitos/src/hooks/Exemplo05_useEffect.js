// Importar modelos
import React, { useState, useEffect } from 'react';

// Funcao
function Exemplo05_UseEffect() {

    // useState
    const [texto, setTexto] = useState('Hello Word');

    // useEffect
    useEffect(() => {
        
        setInterval(() => {
            setTexto('useEffect executado com sucesso!')
        }, 5000);

    });


    // Retorno
    return(
        <h1>{ texto }</h1>
    );
}

// Exportar
export default Exemplo05_UseEffect;