import Status from "./Status";
function TableServices(props) {
    function handleDelete(service){
        props.deleteService(service);
    }
    return (
        <table className="table table-hover">
        <thead>
            <tr>
                <th className="w-50">name</th>
                <th className="w-50">status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                props.services.map(service =>
                    <tr>
                        <td>{service.name}</td>
                        <td><Status type={service.status}/></td>
                        <td>
                            <button className="bg-transparent border border-transparent" onClick={() => handleDelete(service)}>
                                <i class="bi bi-trash3"></i>
                            </button>
                        </td>
                    </tr>
                )
            }
            
        </tbody>
    </table>
    );
}

export default TableServices;