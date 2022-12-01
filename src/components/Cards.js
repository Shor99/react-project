import { useState } from "react";
import "./FilterBarMainPage.css";

function Cards(props) {
    const [search, setSearch] = useState('');
    const [display , setDisplay] = useState('grid');
    function handleInputChange(e) {
        const value = e.target.value;
        setSearch(value);
        props.search(value);
    }
    return ( 
        <>
        
        <div className="d-flex justify-content-between align-items-center">
            <nav class="navbar">
                <form class="container-fluid">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                        <input value={search}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Search" className="form-control me-4 w-25" />
                    </div>
                </form>
            </nav>
            <div className="d-flex justify-content-between px-5 pt-2">
                <div>
                  <button onClick={(e) => setDisplay('list')} className="btn btn-default btn-primary">
                    <i className="bi-list-ul"></i>
                  </button>
                  <button onClick={(e) => setDisplay('grid')} className="btn btn-default btn-primary ms-2">
                    <i className="bi-grid-3x3-gap-fill"></i>
                  </button>
                </div>
            </div>        
        </div> 
        <div  className= {display}>
            {
                props.list.map(data =>
                    <div className="card border-0 m-4 shadow">
                        <img src={data.imageUrl} alt={data.name} className="card-img-top" />
                        <div className="card-body">
                            <div className="badge bg-trasparent border border-dark text-wrap text-dark mb-2">
                                {data.id}
                            </div>
                            <div className="card-title mb-3">
                                <h4>
                                    {data.name}
                                </h4>
                            </div>
                            <div className="card-text mb-3 border-bottom border-secondery">
                                {data.description}
                            </div>
                            <div className="card-title mb-3 border-bottom border-secondery">
                                <i className="bi bi-telephone me-2"></i>
                                {data.phoneNumber}
                            </div>
                            <div className="card-title mb-3 border-bottom border-secondery">
                                <i className="bi bi-pin-map me-2"></i>
                                {data.address}
                            </div>
                            <button className="btn btn-primary">View Website</button>
                        </div>
                    </div>
                )
            }
        </div>
        </>
        
    );
}

export default Cards
