import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as iconList from "@fortawesome/free-solid-svg-icons";


function CardWidget() {
  return (
    <div className="cardWidget">
        <button> <FontAwesomeIcon icon={ iconList.faShoppingCart } /></button>
    </div>
  )
}

export default CardWidget