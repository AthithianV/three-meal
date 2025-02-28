import { Bounce, ToastContainer } from 'react-toastify'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const MainLayout = () => {

  const navigate = useNavigate();
  const path = useLocation();

  useEffect(()=>{
    if(path.pathname==="/"){
      navigate("/recipes");
    }
  },[]);

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
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout