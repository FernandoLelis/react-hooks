// Importar Modulos
import React, { useState, useEffect, useCallback } from 'react';

// Funcao
function Exemplo11_useCallback() {

    // useState
    const [cor, setCor] = useState('blue');
    const [numero, setNumero] = useState(0);

    // Funcao para alterar a cor
    const alterarCor = () => {
        setCor(cor === 'blue' ? 'gray' : 'blue');
    }

    // Funcao para listar os numeros
    const listarNumeros = useCallback(() => {
        return [numero-1, numero, numero+1];
    }, [numero]);


    // Retorno
    return(
        <div style={ {backgroundColor:cor} }>
            <button onClick={ alterarCor }>Alterar Cor</button>
            <input type='number' value={ numero } onChange={ e => setNumero(parseInt(e.target.value)) } />

            <ComponenteListarNumeros lista={ listarNumeros } />
        </div>
    );
}

// Componente listar Numeros
function ComponenteListarNumeros({ lista }) {

    //useState
    const [vetor, setVetor] = useState([]);

    // useEffect
    useEffect(() => {
        console.log('Componente criado!');
        setVetor(lista);
    }, [lista]);

    // Retorno
    return(
        <ul>
            {
                vetor.map(n => (<li key={ n }>{ n }</li>))
            }
        </ul>
    );
}

// Exportar
export default Exemplo11_useCallback;