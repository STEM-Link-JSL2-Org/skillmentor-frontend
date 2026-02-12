import CardGroup from "@/components/CardGroup";
import { cards } from "./data/cards";
import NavBar from "./components/NavBar";

function App() {
  
  return(
    <>
    <NavBar/>
    <CardGroup cardElements={cards} />
    </>
  ) 
}

export default App;
