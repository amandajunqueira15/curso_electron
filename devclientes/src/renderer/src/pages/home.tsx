import {Link} from 'react-router-dom'

export function Home(){

    async function handleAdd(){
        const response = await window.api.fetchAllCustomers()
        console.log(response)
    }

    async function handleCustomerById(){
        const docId = 'a14977b4-b9a8-45c4-b68b-b12b2da75403'
        const response = await window.api.fetchCustomerById(docId)
        console.log(response)
    }

    return(
        <div>
            <h1>Página Home</h1>
            <h3>Teste</h3>
            <Link to="/create">Create</Link>
            <br /><br />
            <button onClick={handleAdd}>
                Buscar Usuários
            </button>
            <br /><br />
            <button onClick={handleCustomerById}>
                Buscar Usuário Pelo ID
            </button>
        </div>
    )
}