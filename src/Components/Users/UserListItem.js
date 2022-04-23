

function UserListItem(props){

    return(
        
        <tr>
        <th>
            <label>
                <input type="checkbox" class="checkbox" />
            </label>
        </th>
        <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                        <img src={props.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div class="font-bold">{props.fullName}</div>
                    <div class="text-sm opacity-50">{props.country}</div>
                </div>
            </div>
        </td>
        <td>
            {props.company}
            <br />
            <span class="badge badge-ghost badge-sm">{props.role}</span>
        </td>
        <th>
            <button class="btn btn-ghost btn-xs">details</button>
        </th>
    </tr>

    )
}
export default UserListItem;