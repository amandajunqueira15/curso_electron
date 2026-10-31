import {Link} from 'react-router-dom'

async function handleAddCustomer(){

    const doc = {
        name: "Matheus Fraga",
        email: "teste@teste.com",
        phone: "67999999",
        address: "Rua X, centro",
        role: "Frontend",
        status: true
    }

    const response = await window.api.addCustomer(doc)
    console.log(response)
}

export function Create(){
    return(
        <div>
            <h1>Página Novo cliente</h1>
            <button onClick={handleAddCustomer}>Cadastrar</button>
        </div>
    )
}