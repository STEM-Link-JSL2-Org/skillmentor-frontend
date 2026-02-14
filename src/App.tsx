import CardGroup from "@/components/CardGroup";
import { cards } from "./data/cards";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  
  return(
    <div className="overflow-x-hidden">
    
    <NavBar/>
    <Hero/>
    <CardGroup cardElements={cards} />

    </div>
  ) 
}

export default App;
