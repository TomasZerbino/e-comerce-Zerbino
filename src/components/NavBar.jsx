import CardWidget from "./CardWidget";
import { Link } from 'react-router-dom'

function NavBar(){
    return(
    <header>   
        <nav>
            <Link className = "nameCommerce" to= "/"><span>Reac</span>Tienda</Link>
        <div className ="listContainer"> 
          
            <ul className="menu">
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "/">Categories</Link>
                    <ul className="categories">
                        <li><Link to= "/category/chips">Chips</Link></li>
                        <li><Link to= "/category/gummies">Gummies</Link></li>
                        <li><Link to= "/category/chocolate">Chocolate</Link></li>
                    </ul>
                </li>
                <li><Link to= "#">Cont</Link></li>
            </ul>
        </div>
        <CardWidget/>
         
        </nav>
     </header>
        
    )
}
export default NavBar;