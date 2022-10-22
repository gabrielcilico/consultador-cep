const axios = require("axios")
const express = require("express")
const app = express()

// configuração
app.use(express.json())
app.listen(3000, () => {
    console.log("servidor online")  
})
const api = axios.create({ 
    baseUrl: 'https://viacep.com.br/ws' 
})

app.get('/', (request,response) => {
    response.send('Hello world')    
})

app.get("/consulta/:cep/cep", async (request,response) => {
    let cep = request.params.cep
    let endereco = await buscaPorCep(cep) 
    response.send(endereco)
}) 

const buscaPorCep = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    //console.log(url)
    let response =  await axios({method:'get',url})
    //console.log(response.data)
    let endereco = response.data 
    
    return endereco
}

