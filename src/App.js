import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas"
import {HashRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import { Link } from "react-router-dom";

function App() {
   return (
      <div>
         <Link to={`/Labs`}>Labs</Link>
         <Link to={`/Kanbas`}>Kanbas</Link>
         <HashRouter>
            <div style={{height: '100%'}}>
               <Routes>
                  <Route path="/hello"    element={<HelloWorld/>}/>
                  <Route path="/Labs/*"   element={<Labs/>}/>
                  <Route path="/Kanbas/*" element={<Kanbas/>}/>
               </Routes>
            </div>
         </HashRouter>
      </div>
   );
}
export default App;