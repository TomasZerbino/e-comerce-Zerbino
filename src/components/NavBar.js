import CardWidget from "./CardWidget";

function NavBar(){
    return(
    <header>   
        <nav>
            <a className = "nameCommerce" href = "#"><span>Reac</span>Tienda</a>
        <div className ="listContainer"> 
        <CardWidget/>  
            <ul>
                <li><a href= "#">Info</a></li>
                <li><a href= "#">Prod</a></li>
                <li><a href= "#">Cont</a></li>
            </ul>
        </div>
         
        </nav>
     </header>
        
    )
}
export default NavBar;