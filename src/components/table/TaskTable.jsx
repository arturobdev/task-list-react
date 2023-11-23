import { useEffect } from 'react';
import { useState } from 'react';
import { completeTask, getData, updateTask } from '../../API/api'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export const TaskTable = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        getData().then(data =>
            setTaskList(data))
    })

    const handleCompleteTask = (taskId) => {
        completeTask(taskId)
    }

    const handleUpdateTask = (data, taskId) => {
        updateTask(data, taskId)
    }

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tarea</th>
                    <th>Descripcion de la tarea</th>
                    <th>Completa</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {taskList.length > 0 &&
                    taskList.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.isCompleted ? "Si " : "No"}</td>
                            <td>{!task.isCompleted ? 
                            <>
                            <Button variant="success" onClick={() => handleCompleteTask(task.id)}> Completa </Button>
                            <Button variant="warning" onClick={() => handleUpdateTask()}> Editar </Button> 
                            </>
                            : "-"
                            }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}
