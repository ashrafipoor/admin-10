import ListItem from "./ListItem";

function Table({ data }) {
    return (
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
                />)}
            </tbody>
        </table>
    )
}
export default Table;