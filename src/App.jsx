
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Home from "./pages/Home"
import Aboutpage from "./pages/Aboutpage"
import Layout from "./components/root/Layout"
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<Aboutpage/>}></Route>
  </Route>
))


function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
