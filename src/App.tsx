import {Routes, Route} from "react-router-dom"
import LangSelector from "./pages/Homepage"
function App() {
 
  return (

    <Routes>
      <Route path="/" element={<LangSelector/>}/>
      {/* <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="cours" element={<Cours/>}/> */}

    </Routes>
    
  )
}

export default App
