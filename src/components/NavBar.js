import CardWidget from "./CardWidget";
import { Link } from 'react-router-dom'

function NavBar(){
    return(
    <header>   
        <nav>
            <Link className = "nameCommerce" to= "/"><span>Reac</span>Tienda</Link>
        <div className ="listContainer"> 
        <CardWidget/>  
            <ul className="menu">
                <li><Link to= "/">Home</Link></li>
                <li><Link to= "#">Category</Link>
                    <ul className="categories">
                        <li><Link to= "/category/Snack">Snk</Link></li>
                        <li><Link to= "/category/Chocolate">Choc</Link></li>
                        <li><Link to= "/category/Candy">Cny</Link></li>
                    </ul>
                </li>
                <li><Link to= "#">Cont</Link></li>
            </ul>
        </div>
         
        </nav>
     </header>
        
    )
}
export default NavBar;