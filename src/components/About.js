import NavBar from "./NavBar";
import Title from "./Title";
import AboutText from "./AboutText";
function About() {
    return ( 
        <>
            <NavBar/>
            <Title mainTxt="About This App">
                <h3>What Make BizAd the #1 app for advertising businesses</h3>
            </Title>
            <AboutText/>
        </>
     );
}

export default About;