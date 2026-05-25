'use strict'

import { getContatos, postContato,deleteContato,putContato } from './contatos.js'

let idContato = null

async function carregarTabela() {

    try {

        const listaContatos = await getContatos()

        const tbody = document.querySelector('tbody')

        tbody.replaceChildren()

        listaContatos.forEach(contato => {

            const tr = document.createElement('tr')

            const tdId = document.createElement('td')
            tdId.textContent = contato.id

            const tdNome = document.createElement('td')
            tdNome.textContent = contato.nome

            const tdCelular = document.createElement('td')
            tdCelular.textContent = contato.celular

            const tdFoto = document.createElement('td')

            const img = document.createElement('img')
            img.src = contato.foto
            img.width = 80

            tdFoto.appendChild(img)

            const tdEmail = document.createElement('td')
            tdEmail.textContent = contato.email

            const tdEndereco = document.createElement('td')
            tdEndereco.textContent = contato.endereco

            const tdCidade = document.createElement('td')
            tdCidade.textContent = contato.cidade

            const tdAcao = document.createElement('td')

            const btUpdate = document.createElement('button')
            btUpdate.textContent = 'UPDATE'

            const btDelete = document.createElement('button')
            btDelete.textContent = 'DELETE'

            btDelete.addEventListener('click', () => removerContato(contato.id))
            btUpdate.addEventListener('click', () => editarContato(contato) )

            tdAcao.appendChild(btUpdate)
            tdAcao.appendChild(btDelete)

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdCelular)
            tr.appendChild(tdFoto)
            tr.appendChild(tdEmail)
            tr.appendChild(tdEndereco)
            tr.appendChild(tdCidade)
            tr.appendChild(tdAcao)

            tbody.appendChild(tr)
        })

    } catch (error) {

        console.log(error)
    }
}

async function removerContato(id){

    await deleteContato(id)

    document.querySelector('tbody').replaceChildren()

    await carregarTabela()

}

async function editarContato(contato){

    idContato = contato.id
    document.getElementById('nome').value = contato.nome
    document.getElementById('celular').value = contato.celular
    document.getElementById('foto').value = contato.foto
    document.getElementById('email').value = contato.email
    document.getElementById('endereco').value = contato.endereco
    document.getElementById('cidade').value = contato.cidade

}

async function adicionarContato() {

    const nome = document.getElementById('nome').value
    const celular = document.getElementById('celular').value
    const foto = document.getElementById('foto').value
    const email = document.getElementById('email').value
    const endereco = document.getElementById('endereco').value
    const cidade = document.getElementById('cidade').value

    const contato = {
        nome,
        celular,
        foto,
        email,
        endereco,
        cidade
    }

    if(idContato == null){

        await postContato(contato)
    
    }else{
    
        await putContato(idContato, contato)
    
        idContato = null
    }

    document.querySelector('tbody').replaceChildren()

    await carregarTabela()
}

carregarTabela()

document.getElementById('btsave').addEventListener('click', adicionarContato)

