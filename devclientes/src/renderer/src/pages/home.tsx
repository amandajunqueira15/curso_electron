import {Link} from 'react-router-dom'

export function Home(){

    async function handleAdd(){
        const response = await window.api.fetchUsers();
        console.log(response)
    }

    return(
        <div>
            <h1>Página Home</h1>
            <h3>Teste</h3>
            <Link to="/create">Create</Link>
            <br /><br />
            <button onClick={handleAdd}>
                Testar
            </button>
        </div>
    )
}