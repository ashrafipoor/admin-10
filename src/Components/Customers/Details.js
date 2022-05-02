import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import LoadingRetry from "./../../HOCs/LoadingRetry";
import Profile from './../../Components/Customers/Profile'
function Details() {

    //load data Status
    const [dataStatus, setDataStatus] = useState('loading');

    //details data
    const [data, setData] = useState({});

    //queryString parameter
    let [searchParams, setSearchParams] = useSearchParams();

    //useEffect only at loaded component called
    useEffect(() => {
        getDetails()
    }, [])

    //get Data From Server
    const getDetails = () => {
        setDataStatus('loading');
        const userId = searchParams.get("userid");
        fetch(process.env.REACT_APP_BASE_URL + `api/clients/${userId}?populate=*`, {
            method: 'get', headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN,
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.data) {
                    setData(result.data);
                    console.log(result.data)
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
    return (
        <LoadingRetry 
            status={dataStatus}
            data={data}
            retryCallBack={getDetails}
            OriginalComponent={Profile}
            />
    )
}
export default Details;