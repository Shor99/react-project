function Title(props) {
    const { mainTxt } = props;
    return ( 
        <header className="bg-dark">
            <div className="about-header p-3 pb-md-4 mx-auto text-center text-white w-50">
                <h1 className="display-4 fw-normal">
                    {mainTxt}
                </h1>
                {
                    props.children
                }
            </div>
        </header>
     );
}

export default Title;