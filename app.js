'use strict'

import { getContatos,getContato, postContato, putContato,deleteContato } from "./contatos.js"

//console.table(await getContatos())
//console.table(await getContato(1))

const novoContato = {
    
    "nome": "João Pedro dos Santos 100% atualizado",
    "celular": "11 9 5714-4815",
    "foto": "https://blog.petiko.com.br/wp-content/uploads/2015/12/cachorro-molhado.jpg",
    "email": "jottapsantosx@gmail.com",
    "endereco": "Rua Urano, 257",
    "cidade": "Jandira"
}

console.table(await deleteContato(366))