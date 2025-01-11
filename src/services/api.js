import axios from "axios";

const api = axios.create({
    baseURL: "http://receitaws.com.br/v1/cnpj",
    
});

export default api;