import {Link} from 'react-router-dom'

export function Home(){
    return(
        <div>
            <h1>Página Home</h1>
            <h3>Teste</h3>
            <Link to="/create">Create</Link>
        </div>
    )
}