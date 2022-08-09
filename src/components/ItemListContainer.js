import ItemList from "./ItemList";
import "./ItemListContainer.css";
function ItemListContainer(props) {

    return (
    <div className="cont">
        <h2>{props.greeting} Pords</h2>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer