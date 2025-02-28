import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/Layout/MainLayout"
import RecipesList from "./pages/RecipesList"
import RecipeView from "./pages/RecipeView";
import Favourites from "./pages/Favourites";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="recipes" >
          <Route index element={<RecipesList/>}/>
          <Route path=":recipeId" element={<RecipeView/>}/>
          <Route path="favourites" element={<Favourites/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App;