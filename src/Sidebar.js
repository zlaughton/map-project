import React from 'react';

const Sidebar = ({ updateSearchResults, restaurants, handleClick }) => (
  <div className='sidebar'>
    <h1>Hutto Restaurants</h1>
    <input type="text" id="restaurantFilter" onInput={(event) => updateSearchResults(event.target.value)}
 placeholder="Filter restaurants..." title="Type in a name"></input>
    <ul role='listbox'>
      { restaurants.map((restaurant, index) => (
        <li
          key={ index }
          className={ (restaurant.isShowing) ? (restaurant.isSelected ? 'selected' : '') : 'inactive'}
          role='button'
          tabIndex='0'
          onClick={() => handleClick(restaurant)}>
          {restaurant.title}
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;