import { useEffect, useState } from 'react';
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //* axios kullanımı
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(console.log)
            .then(res => setUsers(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false)) // loading yazısının kaybolmasını sağlıyor...
    }, [])


    //* fetch kullanımı
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false)) // loading yazısının kaybolmasını sağlıyor...
    }, [])

    return (
        <div>
            <h1>Users</h1>

            {isLoading && <div>Loading...</div>}
            <h3>Fetch ile getirilen data</h3>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
            <h3>Axios ile getirilen data</h3>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
}

export default Users
