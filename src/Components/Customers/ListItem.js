import { Link } from "react-router-dom";


function ListItem(props){

    return(
        
        <tr>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={props.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{props.fullName}</div>
                    <div className="text-sm opacity-50">{props.country}</div>
                </div>
            </div>
        </td>
        <td>
            {props.company}
            <br />
            <span className="badge badge-ghost badge-sm">{props.role}</span>
        </td>
        <th>
            <Link className="btn btn-ghost btn-xs" to={'details?userid='+props.id}>Detail</Link>
        </th>
    </tr>

    )
}
export default ListItem;