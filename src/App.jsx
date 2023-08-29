import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import { TareasIniciales } from './TareasIniciales';

function App() {
    const [colaboradores, setColaboradores] = useState(TareasIniciales);
    const [filtro, setFiltro] = useState("");

    const agregarColaborador = (nuevoColaborador) => {
        if (
            nuevoColaborador.nombre.trim() === '' ||
            nuevoColaborador.correo.trim() === '' ||
            nuevoColaborador.edad.trim() === '' ||
            nuevoColaborador.cargo.trim() === '' ||
            nuevoColaborador.telefono.trim() === ''
        ) {
            return;
        }

        const id = colaboradores.length + 1;
        const colaboradorConID = { ...nuevoColaborador, id };

        setColaboradores((prevColaboradores) => [...prevColaboradores, colaboradorConID]);
    };

    const eliminarColaborador = (id) => {
        const nuevaLista = colaboradores.filter((colaborador) => colaborador.id !== id);
        setColaboradores(nuevaLista);
    };

    const buscarColaboradorFiltrado = (filtro) => {
        setFiltro(filtro);
    };

    const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
        colaborador.telefono.includes(filtro) ||
        colaborador.edad.includes(filtro)
    );

    return (
        <div className='app-container'>
            <h1>Lista de Colaboradores</h1>
            <div className="search-container">
                <Buscador buscarColaboradorFiltrado={buscarColaboradorFiltrado} />
            </div>
            <div className="grid-container">
                <div className="list-container">
                    <Listado
                        colaboradores={colaboradoresFiltrados}
                        eliminarColaborador={eliminarColaborador}
                    />
                </div>
                <div className="form-container">
                    <Formulario agregarColaborador={agregarColaborador} />
                </div>
            </div>
        </div>
    );
}

export default App;


