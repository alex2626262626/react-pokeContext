import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
function App(){
  return(
    <BrowserRouter>
    <div>
      
        
          <nav> 
            <ul>
              <li><Link to="/">Home</Link></li> 
              <li><Link to="/Login">Login</Link></li>
            </ul>
          </nav>
          <Routes> 
            <Route exact path="/" element={<Home/>}/> 
						<Route path="/login" element={<Login/>}/>
            
          </Routes>
    
    </div>
    </BrowserRouter>
  )
}
export default App