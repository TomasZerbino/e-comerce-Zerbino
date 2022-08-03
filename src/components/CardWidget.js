import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee }  from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CardWidget() {
  return (
    <div>
        <button> <FontAwesomeIcon icon={ iconList.faShoppingCart } /></button>
    </div>
  )
}
//<FontAwesomeIcon icon={ faCoffee } />

export default CardWidget