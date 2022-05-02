import { useEffect, useState } from 'react';
import LoadingRetry from '../../HOCs/LoadingRetry';
import './index.css';
import Table from './Table';

function Customers() {

    const [myClients, setMyClients] = useState([]);
    const [dataStatus, setDataStatus] = useState('loading');

    const getData = () => {
        setDataStatus('loading');

        fetch(process.env.REACT_APP_BASE_URL+'api/clients?populate=*', {
            method: 'get', headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN,
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setMyClients(result.data);
                    setDataStatus('loaded');
                }
                else {
                    console.log(result.error);
                    setDataStatus('retry');
                }

            })
            .catch(err => {
                console.log(err);
                setDataStatus('retry');
            })
    }
    useEffect(() => getData(), [])

    return (
        <div className=" w-full h-screen ">
            <LoadingRetry 
            status={dataStatus}
            data={myClients}
            retryCallBack={getData}
            OriginalComponent={Table}
            />
        </div>
    )
}
export default Customers;