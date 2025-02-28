import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import RecipesList from "./pages/RecipesList"

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="/recipes" element={<RecipesList/>}/>
      </Route>
    </Routes>
  )
}

export default App;