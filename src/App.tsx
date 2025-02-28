import { Bounce, ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"

function App() {

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
      <Recipes/>
    </div>
  )
}

export default App
