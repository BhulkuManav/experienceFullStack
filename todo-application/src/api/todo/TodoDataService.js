import axios from 'axios'
import { JPA_API_URL } from '../../Constants'

class TodoDataService {

    retriveAllTodos(name) {
      /*  let username = 'in28Minutes'
        let password = 'dummy'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/users/${name}/todos`,
            { headers: { authorization: basicAuthHeader }});*/

        //return axios.get(`${API_URL}/users/${name}/todos`);
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);

    }

    retriveTodo(name, id) {
       // return axios.get(`${API_URL}/users/${name}/todos/${id}`);
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }
}

export default new TodoDataService()