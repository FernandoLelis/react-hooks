// Importar modulo
import React, { useState } from 'react';

// Funcao
function Exemplo04_useState() {

    // Modelo (JSON)
    const modelo = {nome:'', email:'', cidade:''}

    // useState 
    const [formulario, setFormulario] = useState(modelo);

    // Evento
    const evento = (e) => {
       let nome = e.target.name;
       let valor = e.target.value 

       setFormulario({...formulario, [nome]:valor});
    }

    // Retorno
    return(
        <div>
            <input type='text' name='nome' placeholder='Informe o nome' onChange={ evento } />
            <input type='text' name='email' placeholder='Informe o e-mail' onChange={ evento } />
            <input type='text' name='cidade' placeholder='Informe a cidade' onChange={ evento } />

            <p>{ formulario.nome }</p>
            <p>{ formulario.email }</p>
            <p>{ formulario.cidade }</p>

            <p>{ JSON.stringify(formulario) }</p>
        </div>
    );
}

// Exportar
export default Exemplo04_useState;