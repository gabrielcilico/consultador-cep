const axios = require("axios")
const express = require("express")
const app = express()

// configuração
app.use(express.json())
app.listen(3000, () => {
    console.log("servidor online")  
})

app.get('/', (request,response) => {
    response.send('Hello world')    
})

app.get("/consulta/:cep/:type", async (request,response) => {
    let type = request.params.type
    let { logradouro, cep, localidade, uf } = await buscaEnderecoPorCep(request.params.cep) 
    response.send(`${logradouro} - ${cep} / ${localidade}-${uf}`)
})

const buscaEnderecoPorCep = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let response = await axios({method:'get',url})
    let endereco = response.data

    return endereco
}
