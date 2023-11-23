import axios from "axios"
const urlBase = 'https://localhost:7048/api/Todo/'

export const getData = async () => {
    try {
        const response = await axios.get(`${urlBase}GetAll`);
        const data = response.data.data;
        return data;
    }
    catch (error) {
        console.error('Error al realizar la solicitud GET:', error);
    }
}

export const postData = async (data) => {
    try {
        const response = await axios.post(`${urlBase}Add`, data);
        return response.data;
    } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
    }
}

export const completeTask = async (taskId) => {
    try {
        const response = await axios.delete(`${urlBase}Delete/${taskId}`);
        return response.data;
    }
    catch (error) {
        console.error('Error al realizar la solicitud DELETE:', error)
    }
}

export const updateTask = async (data, taskId) => {
    try {
        const response = await axios.put(`${urlBase}Update/${taskId}`, data);
        return response.data;
    }
    catch (error) {
        console.error('Error al realizar la solicitud DELETE:', error)
    }
}