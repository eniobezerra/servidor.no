const express = require('express')
const app = express()
const port = 8000

app.get('/',(req, res)=>{
 res.send('hello : ENIO RAMOS BEZERRA')
})

app.listen(port , ()=>{
    console.log('servidor iniciado com sucesso ')

})
