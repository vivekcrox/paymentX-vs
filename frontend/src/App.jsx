import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,createBrowserRouter
} from "react-router-dom";
import  Signup  from "../pages/Signup";
import  Signin  from "../pages/Signin";
import  Dashboard  from "../pages/Dashboard";
import  SendMoney  from "../pages/SendMoney";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import About from "../pages/About";


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Portfolio/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/signin',
      element:<Signin/>
    },
    {
      path:'/home',
      element:<Home/>
    },{
      path:'/about',
      element:<About/>
    },
    {
      path:'/send',
      element:<SendMoney/>
    }
    
  ])
  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
      
       {/* <BrowserRouter>
        <Portfolio/>
        <Routes>
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App