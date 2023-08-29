import React, { useState } from 'react';
import Alert from "./Alert";

const Formulario = ({ agregarColaborador }) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeErrorEdad, setMensajeErrorEdad] = useState('');
    const [mensajeErrorTelefono, setMensajeErrorTelefono] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            nuevoColaborador.nombre.trim() === '' ||
            nuevoColaborador.correo.trim() === '' ||
            nuevoColaborador.edad.trim() === '' ||
            nuevoColaborador.cargo.trim() === '' ||
            nuevoColaborador.telefono.trim() === ''
        ) {
            setMensajeError('Faltan campos por llenar');
            setMensajeExito('');
            return;
        }

        if (nuevoColaborador.edad < 18) {
            setMensajeErrorEdad('La edad debe ser mayor o igual a 18 años');
            setMensajeError('');
            setMensajeExito('');
            return;
        } else {
            setMensajeErrorEdad('');
        }

        if (nuevoColaborador.telefono.length < 9) {
            setMensajeErrorTelefono('El teléfono debe tener al menos 9 dígitos');
            setMensajeError('');
            setMensajeExito('');
            return;
        } else {
            setMensajeErrorTelefono('');
        }

        agregarColaborador(nuevoColaborador);
        setMensajeError('');
        setMensajeExito('Colaborador agregado exitosamente');

        setTimeout(() => {
            setMensajeExito('');
        }, 2000);

        setNuevoColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
    };

    return (
        <div className="form-container">
            <h3>Agregar colaborador</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder='Nombre del colaborador'
                        className="form-control"
                        id="nombre"
                        value={nuevoColaborador.nombre}
                        onChange={(e) =>
                            setNuevoColaborador({ ...nuevoColaborador, nombre: e.target.value })
                        }
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder='Email del colaborador'
                        className="form-control"
                        id="correo"
                        value={nuevoColaborador.correo}
                        onChange={(e) =>
                            setNuevoColaborador({ ...nuevoColaborador, correo: e.target.value })
                        }
                        autoComplete="off" 
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder='Edad del colaborador'
                        className={`form-control ${mensajeErrorEdad ? 'is-invalid' : ''}`}
                        id="edad"
                        value={nuevoColaborador.edad}
                        onChange={(e) => {
                            setNuevoColaborador({ ...nuevoColaborador, edad: e.target.value });
                            if (e.target.value < 18) {
                                setMensajeErrorEdad('La edad debe ser mayor o igual a 18 años');
                            } else {
                                setMensajeErrorEdad('');
                            }
                        }}
                        autoComplete="off"
                    />
                    {mensajeErrorEdad && <div className="invalid-feedback">{mensajeErrorEdad}</div>}
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder='Cargo del colaborador'
                        className="form-control"
                        id="cargo"
                        value={nuevoColaborador.cargo}
                        onChange={(e) =>
                            setNuevoColaborador({ ...nuevoColaborador, cargo: e.target.value })
                        }
                        autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder='Teléfono del colaborador'
                        className={`form-control ${mensajeErrorTelefono ? 'is-invalid' : ''}`}
                        id="telefono"
                        value={nuevoColaborador.telefono}
                        onChange={(e) => {
                            const inputValue = e.target.value;
                            // números y 9 digitos para el tel
                            if (/^\d*$/.test(inputValue)) {
                                setNuevoColaborador({ ...nuevoColaborador, telefono: inputValue });
                                if (inputValue.length < 9) {
                                    setMensajeErrorTelefono('El teléfono debe tener al menos 9 dígitos');
                                } else {
                                    setMensajeErrorTelefono('');
                                }
                            }
                        }}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        autoComplete="off" 
                    />
                    {mensajeErrorTelefono && <div className="invalid-feedback">{mensajeErrorTelefono}</div>}
                </div>
                <button type="submit" className="btn btn-primary custom-btn-width">
                    Agregar Colaborador
                </button>
            </form>
            <Alert mensajeExito={mensajeExito} mensajeError={mensajeError} />
        </div>
    );
};

export default Formulario;
