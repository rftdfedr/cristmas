import Nav from "../components/nav"
import Filters from "./components/filters"
function Gifts(){
    return(
        <div>
            <Nav/>
            <main className="container">    
            <Filters/>
            </main>
      </div>
    )  
}

export default Gifts