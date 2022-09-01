import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './store/cartContext'
import CartView from './components/CartView';
import fsDatabase from './services/firebase'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<CartView/>} />
        </Routes>
        <Footer/>
      </CartProvider>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
