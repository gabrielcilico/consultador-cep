const express = require("express")
const app = express()

// configuração
app.use(express.json())
app.listen(3000, () => {
    console.log("servidor online")
})

app.get("/consulta/:cep/cep", (request,response) => {
    let cep = request.params.cep
    response.send(cep)
}) 
