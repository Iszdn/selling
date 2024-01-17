import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Home from './Pages/HomePage';
import AddPage from './Pages/AddPage';
import Wish from './Pages/Wish';
import Details from './Pages/Details';
import Basket from './Pages/Basket';
import Layout from './Layout/Layout';
function App() {
const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddPage/>}/>
        <Route path='/wish' element={<Wish/>}/>
        <Route path='/:id' element={<Details/>}/>
        <Route path='/basket' element={<Basket/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
