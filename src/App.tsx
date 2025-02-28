import { Bounce, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes, recipesSelector } from "./store/reducers/recipes.reducer"
import Loader from "./components/Loader/Loader"
import { AppDispatch } from "./store/store"
import { useEffect } from "react"

function App() {

  const {loader, filter, keyword} = useSelector(recipesSelector);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // dispatch(getRecipes({ keyword, filter }));
    }, [keyword, filter]);

  return (
    <div className="bg-stone-50">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Navbar/>
      {
        loader
        ?<Loader/>
        :<Recipes/>
      }
    </div>
  )
}

export default App
