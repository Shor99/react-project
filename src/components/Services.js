
import { useState } from "react";
import FilterBar from "./FilterBar";
import NavBar from "./NavBar";
import TableServices from "./TableServices";
import Title from "./Title";
import Message from "./Message";
function Services() {
    const [servicesData,setServicesData] = useState([]);
    function addServices(newService){
        const updated = [...servicesData,newService];
        setServicesData(updated);
    }
    function deleteService(service){
        const updated = servicesData.filter(serviceItem => serviceItem.id !== service.id);
        setServicesData(updated);
    }
    return (  
        <>
            <NavBar/>
            <Title mainTxt="Services">
                <h3>Choose services that you would like to get from BizAd</h3>
            </Title>
            <FilterBar addServices={addServices}/>
            {
                servicesData.length === 0 &&
                <Message/>
            }
            <TableServices services={servicesData} deleteService={deleteService}/>
           
        </>
    );
}

export default Services
