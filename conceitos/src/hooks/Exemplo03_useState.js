// Importar modulos
import React, { useState } from 'react';

// Funcao
function Exemplo03_useState() {

    // useState
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);

    // Media
    let media = (nota1 + nota2) / 2;

    //Situacao
    let situacao = media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';

    // Retorno
    return(
        <div>
            <input type='number' placeholder='Primeira nota' onChange={ e => setNota1(parseFloat(e.target.value)) } />
            <input type='number' placeholder='Segunta nota' onChange={ e => setNota2(parseFloat(e.target.value)) } />

            {nota1 && nota2 ? <h1>{ situacao } com media { media }</h1> : ''}
        </div>
    );
}

//Exportar
export default Exemplo03_useState;