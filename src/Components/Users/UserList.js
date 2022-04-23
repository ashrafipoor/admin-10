import './UserList.css';
import UserListItem from './UserListItem';
function UserList() {
    const userInfo={
        fullName:'Hart Hagerty',
        country:'United States',
        company:'Zemlak, Daniel and Leannon',
        role:'Desktop Support Technician',
        image:'https://api.lorem.space/image/face?w=150&h=150'

    }
    return (
        <div className=" w-full h-screen ">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                    <UserListItem {...userInfo}/>
                  
                </tbody>


            </table>
        </div>
    )
}
export default UserList;