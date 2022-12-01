import { Link } from "react-router-dom";
function AboutText() {
    return ( 
        <div className="fs-6 p-3 pb-md-4 mx-auto text-muted text-center  w-25">
            <p className="mb-4 mt-5">
                Everyday many business owners choose to use our app to advertise their business and to gain more traction to their website and online store
            </p> 
            <Link to="/"><button className="btn btn-primary">Start Today</button></Link>
        </div>
     );
}

export default AboutText;