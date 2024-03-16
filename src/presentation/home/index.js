
import Nav from "../components/nav"
import Header from "./components/header"
import SectionStartGiving from "./components/section-start-giving"
import SectionCelebrate from "./components/section-celebrate"
import Footer from "./components/footer"
import SectionShare from "./components/section-share"
import SectionNewGifts from "./components/section-new-gifts"
import SectionSend from "./components/section-send"


function Home(){
    return(
        <div>
            <Nav/>
            <Header/>
            <main className="container">
            <SectionStartGiving/>
            <SectionCelebrate/>
            <SectionShare/>
            <SectionNewGifts/>
            <SectionSend/>
            <Footer/>
            </main>  
      </div>
    )  
}

export default Home