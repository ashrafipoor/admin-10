import { useEffect, useState } from 'react';
import './UserList.css';
import UserListItem from './UserListItem';
function UserList() {

    const [myClients, setMyClients] = useState([]);
    useEffect(() => {
        fetch('https://myapi.run/api/clients?populate=*', {
            method: 'get', headers: {
                'Authorization': 'Bearer d8de5bbc6afc2e274d6d6dc411e9a53a70236ced8106b7ff5cc4806525c123d995252b5c7e6d99e68db6cd224dbbb61a559382d9a9b22a0cbe6c66acd23e0af8849f24f01543e53d3c6611adbcd8f89a272137db2a74d373ecae6d51e5c0b644a6e4e143394194e20d1ee2de4663bcee188cf71b881af55d2cb1054a30f02272',
            }
        })
            .then(res => res.json())
            .then(result => setMyClients(result.data))

    }, [])
    return (
        <div className=" w-full h-screen ">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>


                {myClients.map(clientInfo=><UserListItem
                key={clientInfo.id}
                image={'https://myapi.run/'+clientInfo.attributes.image.data.attributes.url}
                fullName={clientInfo.attributes.fullName}
                country={clientInfo.attributes.country}
                company={clientInfo.attributes.company}
                role={clientInfo.attributes.role}

                  />)}
                    
                   

                </tbody>


            </table>
        </div>
    )
}
export default UserList;