import { useState } from "react";
import ListItem from "./ListItem";

function Table({ data ,retryClick}) {

    const [userForDelete, setUserForDelete] = useState(0);
    const [deleteStatus,setDeleteStatus]=useState(0);
    const deleteCustomer=()=>{
        fetch(process.env.REACT_APP_BASE_URL+'api/clients/'+userForDelete.id, {
            method: 'delete', headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_TOKEN,
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.error) {
                    setDeleteStatus(-1);
                }
                else {
                    setDeleteStatus(1);
                    retryClick();
                }

            })
            .catch(err => {
                setDeleteStatus(-1);
            })
    }
    return (
        <div >

            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle ">
                <div className="modal-box">
                    <h3 className="font-bold text-lg tracking-wider">
                        Do you want to delete : {userForDelete.fullName}
                    </h3>
                    <p className="py-4">
                        By clicking Delete button, you will remove all transaction history and all necessary information regarding to this person!
                        Are you sure to want to delete this person?
                    </p>
                    {deleteStatus===-1?'Error':deleteStatus===1?'Deleted':null}
                    <div className="modal-action">
                        <label htmlFor="deleteModal" className="btn ">cancel</label>
                        <label  className="btn btn-error hover:bg-red-500" onClick={deleteCustomer}>delete</label>
                    </div>
                </div>
            </div>
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
                    {data.map(clientInfo => <ListItem
                        key={clientInfo.id}
                        image={process.env.REACT_APP_BASE_URL + clientInfo.attributes.image.data.attributes.url}
                        fullName={clientInfo.attributes.fullName}
                        country={clientInfo.attributes.country}
                        company={clientInfo.attributes.company}
                        role={clientInfo.attributes.role}
                        id={clientInfo.id}
                        beforDelete={setUserForDelete}
                    />)}
                </tbody>
            </table>
        </div >
    )
}
export default Table;