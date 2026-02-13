import CardGroup from "@/components/CardGroup";
import { cards } from "./data/cards";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  
  return(
    <>
    <NavBar/>
    <Hero/>
    <CardGroup cardElements={cards} />

    </>
  ) 
}

export default App;
