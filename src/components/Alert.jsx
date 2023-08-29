import React from 'react';

const Alert = ({ mensajeExito, mensajeError }) => {
    return (
        <div>
            {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
            {mensajeError && <div className="alert alert-danger">{mensajeError}</div>}
        </div>
    );
};

export default Alert;

