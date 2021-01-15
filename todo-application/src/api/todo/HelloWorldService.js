import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService() {
        return axios.get("http://localhost:8080/hello-world");
    }

    executeHelloWorldBeanService() {
        return axios.get("http://localhost:8080/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
  /*      let username = 'in28Minutes'
        let password = 'dummy'
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`,
            { headers: { authorization: basicAuthHeader } }
        )
   */
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()