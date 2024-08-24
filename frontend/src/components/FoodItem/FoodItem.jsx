import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StroeContext';

export const FoodItem = (props) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={props.image} alt="" className="food-item-image" />
        {!cartItems[props.id] ? (
          <img
            className='add'
            onClick={() => addToCart(props.id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={() => removeFromCart(props.id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[props.id]}</p>
            <img
              onClick={() => addToCart(props.id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p>{props.name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-description">{props.description}</p>
        <p className="food-item-price">${props.price}</p>
      </div>
    </div>
  );
};
