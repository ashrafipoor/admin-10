import { Link } from "react-router-dom";

function Profile({ data }) {
    return (
        <div className="flex justify-start  flex-col">
            <div className="text-sm breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/customers">Customer Managment</Link></li>
                    <li>{data.attributes.fullName}</li>
                </ul>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-16">
                <div className="w-24 mask mask-squircle self-center">
                    <img src={process.env.REACT_APP_BASE_URL + data.attributes.image.data.attributes.url} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="card-title self-center">
                    {data.attributes.fullName}
                    </h2>
                    <span className="text-gray-400 opacity-50 self-center">{data.attributes.country}</span>
                    <p className="self-center " >
                        {`${data.attributes.role} at  `}
                        <span className="text-green-500">{data.attributes.company}</span>
                    </p>

                </div>
            </div>
        </div>
    )
}
export default Profile;