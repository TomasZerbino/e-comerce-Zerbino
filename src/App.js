import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from './store/cartContext'
import CartView from './components/CartView';
import Footer from './components/Footer';
import UserForm from './components/UserForm';
import Thanks from './components/Thanks'
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
          <Route path='/checkout' element={<UserForm/>}/>
          <Route path='/thanks' element={<Thanks/>}/>
        </Routes>
        <Footer/>
      </CartProvider>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
