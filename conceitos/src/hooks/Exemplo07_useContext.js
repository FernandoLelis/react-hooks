// Importar modulos
import React, { createContext, useContext, useState } from 'react';

// Criar contexto
const Contexto = createContext();

// Componente Principal
function Principal() {

    let texto = 'Aprendendo Hooks';

    const [fundo, setFundo] = useState('yellow');

    const alterarFundo = () => {
        setFundo(fundo === 'yellow' ? 'blue' : 'yellow');
    }

    // Retorno
    return(
        <Contexto.Provider value={{ texto, fundo, alterarFundo }}>
            <Camada1 />
        </Contexto.Provider>
    );
}

// Componente Camada1
function Camada1() {

    // Retorno
    return(
        <div style={{backgroundColor:'red', width:'400px', height:'400px', display: 'inline-block'}}><Camada2 /></div>
    );
}

// Componente Camada2
function Camada2() {

    // Retorno
    return(
        <div style={{backgroundColor:'green', width:'300px', height:'300px', margin:'50px', display:'inline-block'}}><Camada3 /></div>
    );
}

// Componente Camada3
function Camada3() {

    const { texto, fundo, alterarFundo } = useContext(Contexto)

    // Retorno
    return(
        <div style={{backgroundColor:fundo, width:'200px', height:'200px', margin:'50px'}}>
            <p>{ texto }</p>
            <button onClick={ alterarFundo }>Clique Aqui</button>
        </div>
    );
}

// Exportar
export default Principal;