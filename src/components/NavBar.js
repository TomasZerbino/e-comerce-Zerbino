import "./NavBar.css"

function NavBar(){
    return(
    <header>   
        <nav>
            <a className = "nameCommerce" href = "#">ReaCommerce</a>
        <div className ="listContainer">   
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