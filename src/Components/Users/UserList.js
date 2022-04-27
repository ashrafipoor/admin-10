import { useEffect, useState } from 'react';
import Retry from '../Retry';
import Spinner from '../Spinner';
import './UserList.css';
import UserListItem from './UserListItem';
function UserList() {
    const [myClients, setMyClients] = useState([]);
    const [dataStatus, setDataStatus] = useState(0);
    const getData = () => {
        setDataStatus(0);

        fetch('https://myapi.run/api1/clients?populate=*', {
            method: 'get', headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN,
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setMyClients(result.data);
                    setDataStatus(1);
                }
                else {
                    console.log(result.error);
                    setDataStatus(2);
                }

            })
            .catch(err => {
                console.log(err);
                setDataStatus(2);
            })
    }
    useEffect(() => getData(), [])

    const renderTable = () => {
        let result = <Spinner />;
        switch (dataStatus) {
            case 1:
                result =
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
                            {myClients.map(clientInfo => <UserListItem
                                key={clientInfo.id}
                                image={'https://myapi.run/' + clientInfo.attributes.image.data.attributes.url}
                                fullName={clientInfo.attributes.fullName}
                                country={clientInfo.attributes.country}
                                company={clientInfo.attributes.company}
                                role={clientInfo.attributes.role}
                            />)}
                        </tbody>
                    </table>;
                break;
            case 2:
                result = <Retry retryClick={getData} />;
                break;
            default:
                result = <Spinner />;
                break;
        }
        return result;

    }

    return (
        <div className=" w-full h-screen ">
            {renderTable()}
        </div>
    )
}
export default UserList;