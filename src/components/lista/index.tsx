import React from "react";
import './styles.scss'

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    },{
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside className="listaTarefas">
            <h2>Estudo do Dia!</h2>
            <ul>
                {tarefas.map((iten, index) => (
                    <li key={index}>
                        <h3>
                            {iten.tarefa}
                        </h3>
                        <span>
                            {iten.tempo}
                        </span>
                    </li>
                )) }
                
            </ul>

        </aside>
    )
} 

export default Lista;