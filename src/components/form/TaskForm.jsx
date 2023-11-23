import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { postData } from '../../API/api';
import { useForm } from '../../hooks/useForm';
import './taskForm.css'

export const TaskForm = () => {

    const [formValues, handleInputChange, reset] = useForm({
        title: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.title && formValues.description) {
            postData(formValues)
            reset();
        } else {
            alert("No se pueden agregar datos vacios");
        }
    }

    return (
        <Form  className='task-form' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Tipo de tarea</Form.Label>
                <Form.Control type="text" name="title" value={formValues.title} placeholder="Ingrese nueva tarea" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Descripcion de la tarea</Form.Label>
                <Form.Control type="text" name="description" value={formValues.description} placeholder="Ingrese una descripcion de la tarea" onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
    );
}
