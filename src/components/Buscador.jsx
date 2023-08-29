import React from 'react';

const Buscador = ({ buscarColaboradorFiltrado }) => {
    return (
        <input
            type="text"
            placeholder="Buscar colaborador"
            style={{ width: '300px' }}
            onChange={(e) => buscarColaboradorFiltrado(e.target.value)} 
        />
    );
};

export default Buscador;



