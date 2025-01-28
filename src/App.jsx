import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbars from "./components/Navbars";
import Footers from "./components/Footers";




export default function App() {
  return (
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   <Footers/>
    </BrowserRouter>
  
  )
}
