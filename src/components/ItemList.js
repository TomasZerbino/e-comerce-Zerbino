import Item from './Item'

function ItemList(props) {

  return (
    <div className='itemList'>
       {
        props.array.map( (prod) => 
        <Item 
        key={prod.id} 
        title={prod.title} 
        description={prod.description} 
        price={prod.price} 
        imgurl={prod.imgurl}/>
        )
       }
    </div>
  )
}
 
export default ItemList