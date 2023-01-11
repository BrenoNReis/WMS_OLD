import axios from "axios";

const apitestes = axios.create ({
    baseURL: "https://63bd762fd660062388a6a90d.mockapi.io/consultaprodutos",
})

export default apitestes;