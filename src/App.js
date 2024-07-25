import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sixpage from "./Component/Sixpage/Sixpage";
import Fourthpage from "./Component/Fourthpage/Fourthpage";
import  Product  from "./redux/Products";
import Homefirst from "./Homefirst";
import About from "./Component/Eall/About";
import Cart from "./redux/Cart";
import Tabled from "./redux/Tabled";
import RegisterForm from "./Sign-form/RegisterForm";
import LoginForm from "./Sign-form/LoginForm";
import AdminFrom from "./Sign-form/AdminForm";
import Adminpanel from "./Sign-form/Adminpanel";
import Sidebar from "./Sign-form/Sidebar";


function App() {
    
    return(
        <>
        <div>
        </div>
        <Router>
            <Routes>
       
             <Route path='/' element={<Homefirst />} />
             <Route path='/about' element={<Sixpage />}  />
             <Route path='/class' element={<Fourthpage />}  />
             <Route path='/pricing' element={<Product/>}  />
             <Route path='/cart' element={<Cart  />}  /> 
             <Route  path='/about' element={<About/>}  />
             <Route  path='/table' element={<Tabled/>}  />
             <Route  path='/registerform' element={<RegisterForm/>}  />
             <Route  path='/login' element={<LoginForm/>}  />
             <Route  path='/adminform' element={<AdminFrom/>}  />
             <Route  path='/sidebar' element={<Sidebar />}  />
             <Route  path='/adminpanel' element={<Adminpanel />}  />
           
        </Routes>
        </Router>
        </>
    )
    
}
export default App;