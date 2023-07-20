import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleAddtoCartClick() {
    setIsInCart(isInCart => !isInCart)
  }

  return (
    <li className= {isInCart ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
        onClick={handleAddtoCartClick} 
        className={isInCart ? "remove" : "add"}> {isInCart ? "Remove From" : "Add To"} cart
      </button>
    </li>
  );
}

export default Item;
