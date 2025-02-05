import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import HeroSection from "../HeroSection";
import Myportfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Footer from "../Footer";


export default function Home(){
    return(

        <>
        <title>Hossam-Farid</title>
            <HeroSection />
            <MySkills/>
            <Myportfolio/>
            <AboutMe/>
            <ContactMe/>
            <Footer/>
        </>
    )
}

