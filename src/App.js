import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import menbanner from './Components/Assets/banner_mens.png'
import womenbanner from './Components/Assets/banner_women.png'
import kidsbanner from './Components/Assets/banner_kids.png'





function App() {
  return (
    <div >
  <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route path='/' element={<Shop/>}/>
     <Route path='/men' element={<ShopCategory banner={menbanner} Category='men'/>}/>
     <Route path='/women' element={<ShopCategory banner={womenbanner} Category='women'/>}/>
     <Route path='/kids' element={<ShopCategory banner={kidsbanner} Category='kid'/>}/>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
     <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
    </Route>
     </Routes>
  </BrowserRouter>
  <Footer/>
    </div>
  );
}

export default App;
