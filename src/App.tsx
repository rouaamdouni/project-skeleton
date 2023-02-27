import {Routes, Route} from "react-router-dom"
import {Homepage,Register,Login,Cours} from "./pages/index.ts"
function App() {
 
  return (

    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="cours" element={<Cours/>}/>

    </Routes>
    
  )
}

export default App
