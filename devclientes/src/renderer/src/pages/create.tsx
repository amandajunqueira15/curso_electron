import {Link} from 'react-router-dom'

async function handleAddCustomer(){

    const doc = {
        name: "Amanda Junqueira",
        email: "amanda@teste.com",
        phone: "99999999",
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