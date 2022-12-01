import { useState } from "react";
function FilterBar(props) {
    const [name,setName] = useState('Mailling List');
    const [status,setStatus] = useState('active');
    function handleBtnClick(e){
        e.preventDefault();
        props.addServices({
            id: Math.random() + '',
            name: name,
            status: status,
        });
        
    }
    return (
        <>
            <div className="d-flex p-4 border align-items-center">
                <label className="me-2">Service Name:</label>
                <select value={name} onChange={(e) => setName(e.target.value)}  className="form-select w-25 me-2" aria-label="Default select example">
                    <option>Mailling List</option>
                    <option>WhatsApp Group Notification</option>
                </select>
                <label className="me-2">Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select w-25 me-2" aria-label="Default select example">
                    <option>active</option>
                    <option>disabled</option>
                    <option>banned</option>
                </select>
                <button onClick={(e) => handleBtnClick(e)} type="submit" className="btn btn-transparent border border-success text-success">Add Service</button>
            </div>
        </>
        
     );
}

export default FilterBar;