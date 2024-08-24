import React, { useContext } from 'react';
import './FoodDisplay.css';
import { FoodItem } from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StroeContext';

const FoodDisplay = ({ category }) => {  
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem 
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Add this to avoid returning undefined
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
