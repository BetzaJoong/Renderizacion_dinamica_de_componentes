import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Listado = ({ colaboradores, eliminarColaborador }) => {
    const [confirmarId, setConfirmarId] = useState(null);

    const confirmarEliminacion = (id) => {
        setConfirmarId(id);
    };

    const cancelarEliminacion = () => {
        setConfirmarId(null);
    };

    const realizarEliminacion = (id) => {
        eliminarColaborador(id);
        setConfirmarId(null);
    };

    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map((colaborador, index) => (
                        <tr key={index}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                {confirmarId === colaborador.id ? (
                                    <div>
                                        <button onClick={() => realizarEliminacion(colaborador.id)}>Confirmar</button>
                                        <button onClick={cancelarEliminacion}>Cancelar</button>
                                    </div>
                                ) : (
                                    <button
                                        className="delete-button"
                                        onClick={() => confirmarEliminacion(colaborador.id)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="delete-icon"
                                        />
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listado;
